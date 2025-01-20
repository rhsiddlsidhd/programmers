function solution(n) {
    var answer = 0;
    const  삼진법 = [...n.toString(3)].reverse().join("")
    return parseInt(삼진법,3);
}