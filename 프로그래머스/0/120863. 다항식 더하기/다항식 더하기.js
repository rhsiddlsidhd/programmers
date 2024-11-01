function solution(polynomial) {
    var answer = [];
    const xNum =polynomial.split(" + ").filter((v)=> v.includes("x")).map((v)=>parseInt(v.replace("x","") )|| 1).reduce((acc,cur)=>acc+cur,0)
    const num = polynomial.split(" + ").filter((v)=> !v.includes("x")).reduce((acc,cur)=>acc+parseInt(cur),0)
    
    if(xNum){
        if(xNum === 1){
             answer.push("x")        
    } else{
             answer.push(`${xNum}x`)    
      }
    }
    
    if(num){
        answer.push(num)
    }  
    return answer.join(" + ");
}