function solution(num_list) {
  var answer = 0;
  num_list.map((v) => {
    while (v !== 1) {
      answer++;
      if (v % 2 !== 0) {
        v = (v - 1) / 2;
      } else {
        v = v / 2;
      }
    }
  });
  return answer;
}
