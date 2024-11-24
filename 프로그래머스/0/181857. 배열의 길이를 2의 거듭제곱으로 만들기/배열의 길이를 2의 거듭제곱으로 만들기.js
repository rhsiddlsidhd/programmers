function solution(arr) {
    let length = arr.length;
    let count = 0;
    while(2**count < length){
    count ++
    }
    return [...arr, ...Array(2 ** count - length).fill(0)];
}