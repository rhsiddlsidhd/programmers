function solution(arr) {
    var stk = [];

    let index = 0;

    while (index < arr.length) {
        if (stk.length === 0) {
            stk.push(arr[index++]);
        } else {
            if (stk[stk.length - 1] < arr[index]) {
                stk.push(arr[index++]);
            } else {
                stk.pop();
            }
        }
    } 

    return stk;
}