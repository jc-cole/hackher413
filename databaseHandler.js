export class DatabaseHandler {
    constructor(storageKey) {
        this.storageKey = storageKey;
        this.data = {}
    }

    setData(jsonObject) {
        this.data = jsonObject
    }

    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    load() {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : null;
    }
}