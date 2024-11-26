function solution(myStr) {
  let answer = myStr.split(/[abc]/).filter(v=>v!=="");
    return answer.length ===0 ? ["EMPTY"] : answer;
}