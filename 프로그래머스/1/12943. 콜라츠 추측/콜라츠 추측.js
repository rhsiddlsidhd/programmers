function solution(num) {
    var count = 0;
    let n = num;
    
    if(n === 1){
       return 0; 
    }
    
    while ( n !== 1){
        if(count === 500) return -1;
        n = n %2 === 0 ? n / 2 : n * 3 + 1;
        count ++
    }
    
    return count;
}