import { saveToStorage, loadFromStorage } from "./storage.service";
import { utilService } from "./util.service";

export const userService = {
    getUser,
    signup,
    addMove,
}

const gUsers = []
const STORAGE_KEY = 'usersDB'

function getUser() {
    const users = loadFromStorage('usersDB')
    return users[0]
}

function addMove(contact, amount) {
    let users = loadFromStorage(STORAGE_KEY)
    console.log('users', users)

    if ((amount > 0) && (users[0].coins - amount >= 0)) {

        users[0].coins -= amount
        const newMove = {
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount,
        }
        users[0].moves.unshift(newMove)
        console.log('users!!!', users)
        saveToStorage(STORAGE_KEY, users)

        return users[0]
    }
}

function signup(name) {
    const user = {
        name,
        coins: 100,
        _id: utilService.makeId(),
        moves: []
    }
    gUsers.unshift(user)
    saveToStorage(STORAGE_KEY, gUsers)
    return Promise.resolve(user)
}
