function solution(cipher, code) {
    var answer = "";
    answer = [...cipher].filter((_, i) => (i + 1) % code === 0);
    return answer.join("");
  }