  function solution(n) {
    var answer = [];
    answer = [...new Array(n + 1).keys()].filter((v) => {
      return v > 0 && n % v === 0;
    });
    return answer;
  }