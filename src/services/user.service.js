import { saveToStorage, loadFromStorage } from "./storage.service";
import { utilService } from "./util.service";

export const userService = { 
    getUser, 
    signup
}

const gUsers = []

function getUser() { 
    const user = loadFromStorage('loggedInUser')
    return user
}

function signup(name) { 
    const user = { 
        name,
        coins: 100,
        _id: utilService.makeId(),
        moves: []
    }
    gUsers.unshift(user)
    saveToStorage('users', gUsers)
    return Promise.resolve(user)
}
