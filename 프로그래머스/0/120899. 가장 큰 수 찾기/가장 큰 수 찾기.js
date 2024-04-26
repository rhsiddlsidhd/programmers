function solution(array) {
   
    let maxNum = -Infinity;
    let maxIndex = -1;

    
    array.forEach((num, index) => {
        if (num > maxNum) {
            maxNum = num;
            maxIndex = index;
        }
    });

    
    return [maxNum, maxIndex];
}