class HashTable {
    constructor () {
        this.table = new Array(127);
        this.size = 0
    }

    _hash(key) {
        let hash = 1;
        for (let i = 0; i < key.length; i++) {
            hash = hash * key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    set(key, value) {
        let index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        let index = this._hash(key);
        return this.table[index];
    }

    remove(key) {
        let index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            this.table[index] = [];
            this.size--;
            return true;
        }
        return false;
    }
}

let hash = new HashTable();
hash.set('test1', 1)
hash.set('test2', 12)
hash.set('test3', 123)
console.log(hash.get('test2'));
