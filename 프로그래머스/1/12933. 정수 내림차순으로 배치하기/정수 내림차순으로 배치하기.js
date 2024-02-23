function solution(n) {
    
const array = n.toString().split("");
const result = array.sort((a,b) => b - a);
    return parseInt(result.join(""));
    
}