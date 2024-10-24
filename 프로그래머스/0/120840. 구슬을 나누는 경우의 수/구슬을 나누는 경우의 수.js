function factorial(num) {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac *= i; 
    }
    return fac; 
}

function solution(balls, share) {  
    var answer = factorial(balls) / (factorial(share) * factorial(balls - share));
    
    return Math.round(answer)  ;
}
