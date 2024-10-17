function solution(i, j, k) {
    var answer = 0;

    for (let a = i; a <= j; a++) {
      const count = [...a.toString()].filter((v) => Number(v) === k).length;
      answer += count;
    }

    return answer;
  } 