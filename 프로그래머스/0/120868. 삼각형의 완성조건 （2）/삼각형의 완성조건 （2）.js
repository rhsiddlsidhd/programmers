function solution(sides) {
    var answer = [];
    const sorted = sides.sort((a,b)=>b-a)
    const max = sorted[0] + sorted[1]
    const min = sorted[0] - sorted[1]
    
    return answer = max - min -1;
}