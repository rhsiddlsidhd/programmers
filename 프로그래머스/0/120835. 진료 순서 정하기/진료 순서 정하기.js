function solution(emergency) {
    var answer = [];
//slice() 얕은 복사
    const sorted = emergency.slice().sort((a,b)=>b-a)
   answer= emergency.map((v)=>{
        return sorted.indexOf(v) + 1
    }) 
    return answer;
}
