function solution(myStr) {
  let answer = myStr.split(/[abc]/).filter(v=>v!=="");
    if(answer.length ===0){
        answer.push("EMPTY")
    }
    return answer;
}