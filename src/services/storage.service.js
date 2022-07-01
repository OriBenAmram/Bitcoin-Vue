export const localStorageService = {
    saveToLStorage,
    loadFromLStorage
}
export const sessionStorageService = {
    saveToSessionStorage,
    loadFromSessiontorage
}




function saveToLStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}


function loadFromLStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}


function saveToSessionStorage(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}


function loadFromSessiontorage(key) {
    var val = sessionStorage.getItem(key)
    return JSON.parse(val)
}
