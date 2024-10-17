

function solution(my_string) {
    var answer = [];
    [...my_string].forEach((v)=>{
        if(!isNaN(v)){
            answer.push(Number(v))
        }
    })
    answer.sort((a,b)=>a-b)
    return answer;
}