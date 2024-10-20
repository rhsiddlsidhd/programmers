function solution(s) {
    var answer = "";
    // console.log([...s].sort())
    answer = [...s].sort().filter((v,i,arr)=>{
        return arr.indexOf(v) === arr.lastIndexOf(v)  
    })
  
    
    return answer.join("");
}