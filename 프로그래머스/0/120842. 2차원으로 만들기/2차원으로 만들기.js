  function solution(num_list, n) {
    var answer = [];
    for (let i = 0; i < Math.floor(num_list.length / n); i++) {
      answer.push(num_list.slice(i * n, i * n + n));
    }
    return answer;
  }