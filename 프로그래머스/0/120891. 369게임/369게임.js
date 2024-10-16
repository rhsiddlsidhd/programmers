  function solution(order) {
    var answer = 0;
    let count = [3, 6, 9];
    Array.from(String(order), Number).forEach((v, i) => {
      if (count.includes(v)) {
        answer += 1;
      }
    });
    return answer;
  }