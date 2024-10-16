 function solution(numbers, direction) {
    var answer = [];

    switch (direction) {
      case "right":
        const v = numbers.pop();
        answer = [v, ...numbers];
        break;
      case "left":
        const p = numbers.shift();
        answer = [...numbers,p];
        break;
      default:
    }
    return answer;
  }