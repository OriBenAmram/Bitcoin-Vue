import { sessionStorageService } from "./storage.service";
import { utilService } from "./util.service";

export const userService = {
    getUser,
    signup,
    addMove,
}

const gUsers = []
const STORAGE_KEY = 'usersDB'

function getUser() {
    const users = sessionStorageService.loadFromSessiontorage('usersDB')
    if (users) {
        return users[0]
    } else return null
}
function addMove(contact, amount) {
    let users = sessionStorageService.loadFromSessiontorage('usersDB')
    console.log('users', users)

    if ((amount > 0) && (users[0].coins - amount >= 0)) {

        users[0].coins -= amount
        const newMove = _createMove(contact, amount)
        users[0].moves.unshift(newMove)
        console.log('users!!!', users)
        sessionStorageService.save
        sessionStorageService.saveToSessionStorage(STORAGE_KEY, users)

        return users[0]
    }
}



function signup(name) {
    const user = {
        name,
        coins: 100000000,
        _id: utilService.makeId(),
        moves: [_createMove({
            "_id": "5a56640269f443a5d64b672hs",
            "name": "Ori Ben Amram",
            "email": "ori.bitcoin@gmail.com",
            "phone": "+1 (968) 289-3824",
            "status": "approved",
        }, 50000),
        _createMove({
            "_id": "5a56640269f443a5d64b46cz",
            "name": "Daniel Shaked",
            "email": "daniel.bitcoin@gmail.com",
            "phone": "+1 (968) 982-3824",
            "status": "pedding",
        }, 55000)]
    }
    gUsers.unshift(user)
    sessionStorageService.saveToSessionStorage(STORAGE_KEY, gUsers)
    return Promise.resolve(user)
}



function _createMove(contact, amount, status) {
    return {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount,
        status
    }
}