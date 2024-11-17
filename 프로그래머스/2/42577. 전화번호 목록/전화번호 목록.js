function solution(phone_book) {
    const table = new Map();
    for (const number of phone_book) {
        table.set(number, true);
    }
    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            const prefix = number.substring(0, i);
            if (table.has(prefix)) {
                return false;
            }
        }
    }
    return true;
}