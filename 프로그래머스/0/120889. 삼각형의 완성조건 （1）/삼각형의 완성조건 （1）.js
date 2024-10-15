function solution(sides) {
    var answer = 0;

    sides.sort((a, b) => {
      return a - b;
    });
    
    answer = sides[sides.length - 1] < sides[0] + sides[1] ? 1 : 2 

    return answer;
  }