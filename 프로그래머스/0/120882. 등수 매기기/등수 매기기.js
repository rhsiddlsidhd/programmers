function solution(score) {
    var average = [];
    score.forEach((v)=>average.push((v[0]+v[1])/2))
    const sorted = [...average].sort((a,b)=>b-a)
    //정렬된 변수에 indexOf 를 뽑기
    //미정렬된 변수와 indexOf 매칭시켜 [...index ] 나열
    const result = average.map((v)=>sorted.indexOf(v) + 1)
    return result;
}