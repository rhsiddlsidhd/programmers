function solution(t, p) {
    var answer = 0;
    const copy = [...t];
    const type = p.length;
    const result= [];
    
    for(let i =0; i<copy.length-type+1; i++){  
        const index = type +i;
        const n =copy.slice(i,index).join("");
        if(n <= p) answer++
    }
        


    
    return answer;
}

