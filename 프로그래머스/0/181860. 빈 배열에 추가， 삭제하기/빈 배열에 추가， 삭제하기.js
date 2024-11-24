function solution(arr, flag) {
  var answer = [];
  flag.forEach((v, index) => {
    
    if (v) {
      for (let i = 0; i < arr[index] * 2; i++) { 
        answer.push(arr[index]);
      }
    } else {
      for (let j = 0; j < arr[index]; j++) {
        answer.pop();
      }
    }
  });
  return answer;
}
