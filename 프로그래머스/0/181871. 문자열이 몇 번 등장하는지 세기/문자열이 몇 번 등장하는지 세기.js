function solution(myString, pat) {
    var answer = [];
    for(let i =0 ; i < myString.length; i++){
        answer.push(myString.slice(i,i+pat.length))
    }
    return answer.filter((v)=>v === pat).length;
}