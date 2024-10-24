function solution(dots) {
    var answer = 0;
// dots 반복문으로 도출
// x 값 y값 재 배열 => x y 배열 기준으로 비교 => Math.max - Math.min
// answer = x * y
    let x = [];
    let y = [];
    dots.forEach((v)=>{
        x.push(v[0])
        y.push(v[1])    
    })
    answer = (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
    
    
    
    
    return answer;
}