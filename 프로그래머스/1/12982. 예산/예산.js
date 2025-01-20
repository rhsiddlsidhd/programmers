function solution(d, budget) {
    var answer = 0;
    const copy = d.sort((a,b)=>a-b);
    for(let i =0; i < d.length ; i++ ){
        if(budget >= copy[i]){          
            budget -= copy[i];
            answer++;
        }
    }
    
    
    
    return answer;
}

