function solution(num_list) {
  var answer = 0;
  num_list.map((v) => {
    while (v !== 1) {
      answer++;
    v = v % 2 !==0 ? (v-1)/2 : v / 2
    }
  });
    
  return answer;
}
