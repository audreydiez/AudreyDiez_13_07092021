export function getLocalStorageOrDefault(key, defaultValue) {
    const stored = localStorage.getItem(key)

    if (!stored) {
        return defaultValue
    }
    return JSON.parse(stored)
}
