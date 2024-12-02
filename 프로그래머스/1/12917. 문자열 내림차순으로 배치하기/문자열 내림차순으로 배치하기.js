function solution(s) {
    return [...s].sort((a,b)=>b>a ? 1: -1).join("")
}