function solution(message) {
    var answer = 0;
    [...message].forEach((_, i, arr) => {
     answer = arr.length * 2;  
    });
    return answer;
  }