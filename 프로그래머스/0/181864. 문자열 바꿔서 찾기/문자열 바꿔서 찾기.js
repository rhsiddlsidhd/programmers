function solution(myString, pat) {
    //myString = A 하고 B 체인지
    const answer=[];
   [...myString].forEach((v,i)=>{
       answer.push(v === "A" ? "B": "A"); 
   })
    return  answer.join("").includes(pat) ? 1 : 0;
}