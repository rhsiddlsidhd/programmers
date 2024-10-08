function solution(a, b, c) {
    var answer = 0;
    
    const condition  = {
        allDifference : a !== b && a !== c && b !== c,
        equal : a === b && b === c ,
        oneDefference : a ===b && a !== c || a === c && a !== b || b === c && b !== a,
    }
    
    const offset ={
       sum :  a + b + c,
       twoExponent  : a ** 2 + b ** 2 + c ** 2,
        threeExponent : a ** 3 + b ** 3 + c ** 3,
    }
    
//     경우의 수는 3가지 1. 모두 같은 경우 2. 하나만 다른 경우 3. 셋 다 다른 경우
    
    answer = condition.allDifference ? offset.sum : condition.equal ? (offset.sum) * (offset.twoExponent) * (offset.threeExponent) : condition.oneDefference && (offset.sum) * (offset.twoExponent) 
    
    
    
    return answer;
}