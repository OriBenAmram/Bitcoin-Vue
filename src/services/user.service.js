import { saveToStorage, loadFromStorage } from "./storage.service";
import { utilService } from "./util.service";
export const userService = { 
    getUser, 
    signup
}

function getUser() { 
    const user = loadFromStorage('loggedInUser')
    return user
}

function signup(user) { 
    user.coins = 100
    user.id = utilService.makeId()
    saveToStorage('loggedInUser', user)
}