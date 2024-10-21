function solution(s) {
    var stack = [];
    
    // if(조건 s === Z) { answer -= [...s][i-1] } else { answer += [...s] }
    s.split(" ").forEach((v,i,arr)=>{
        if(v === "Z"){
            stack.pop()
        } else{
            stack.push(Number(v))
        }
    })
    return stack.length ? stack.reduce((acc,cur)=> acc += cur, 0) : 0
}
