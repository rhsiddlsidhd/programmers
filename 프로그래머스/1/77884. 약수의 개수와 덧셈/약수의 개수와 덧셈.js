function solution(left, right) {
    let result = 0;
    let even = [];
    let odd = [];
   
    for(let i = left; i <= right; i++){
      const numbers =  divisor(i);
        result += numbers.length %2 ===0 ? i : -i 
    }
    return result;
}

function divisor(num){
    const result = [];
    let index = 0;
    while(index <= Math.sqrt(num)){
        if(num % index === 0){
            result.push(index)
            if(index !== num / index) result.push(num/index)
        }
        index++
    }
    return result;
}

