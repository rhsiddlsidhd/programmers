  function solution(numbers, k) {
    var answer = 0;
    // k 가 1증가할때 index는 2증가
    // k 가 3라면 index는 4
    // k 가 4라면 index는 6
    // k 가 5라면 index는 8
    const i = (2 * (k - 1)) % numbers.length;
    answer = numbers[i];
    return answer;
  }