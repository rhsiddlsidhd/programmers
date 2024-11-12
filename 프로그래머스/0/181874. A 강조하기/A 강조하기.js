function solution(myString) {
    
    var answer = [...myString].map(v => v==="a"? v.toUpperCase() : v==="A" ? v : v.toLowerCase()).join("")
    console.log(answer)
    return answer
}