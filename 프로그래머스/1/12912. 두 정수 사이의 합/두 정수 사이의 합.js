function solution(a, b) {

    var n = Math.abs(b - a) + 1;
    var answer = ((a + b) * n) / 2;

    return answer;
}