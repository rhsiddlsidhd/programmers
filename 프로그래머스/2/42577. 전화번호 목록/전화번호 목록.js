function solution(phone_book) {
    const hashTable = new Map();
    for (const number of phone_book) {
        hashTable.set(number, true);
    }
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (hashTable.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}