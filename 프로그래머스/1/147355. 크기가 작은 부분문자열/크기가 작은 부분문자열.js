function solution(t, p) {
    var answer = 0;
    const copy = [...t];
    const type = p.length;
    const result= [];
    
    for(let i =0; i<copy.length; i++){  
        const index = type +i;
        result.push(copy.slice(i,index).join(""))
    }
        
    result.forEach((v)=>{

        if(v.length === type && Number(v) <= Number(p)){
           answer++
        }
    })

    
    return answer;
}