  function solution(my_string) {
    var answer = 0;

    [...my_string].forEach((v) => {
      
      if (!isNaN(v)) {
          
        answer += Number(v);
      }
    });

    return answer;
  }