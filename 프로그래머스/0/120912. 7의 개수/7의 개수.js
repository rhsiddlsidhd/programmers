  function solution(array) {
    var answer = 0;
    let target = 7;
    array.forEach((v) => {
      const value = String(v).split("");
      value.filter((v) => {
        return Number(v) === target ? answer += 1 : answer += 0;
      });
    });
      
      //매개변수를 재정렬 할 수 있다.
    return answer;
  }