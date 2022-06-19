
export function saveToStorage(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val))
}


export function loadFromStorage(key) {
    var val = sessionStorage.getItem(key)
    return JSON.parse(val)
}