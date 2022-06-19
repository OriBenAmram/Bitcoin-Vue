

export const userService = { 
    getUser, 
    signup
}

// _createUsers()

function getUser() { 
    return 'Guest'
}

function signup(user) { 
    user.coints = 100
    console.log('user:', user);
}

// await userService.signup({fullname: 'Ori Bori', username: 'ori', password:'123', coins: 10000})