  function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        if([...String(i)].every((v) => {
         return v === "5" || v === "0"
      })
          ){
            answer.push(i)
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
  }