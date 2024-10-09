// numLog는 키보드를 누른 값
// 이전 값을 비교해서 +1 -1 +10 -10 했을때 값을 w s d a return 
// slice 0,2 +1 씩 입력 그러면 앞의          
// const abc = numLog.slice(0,2) 
function solution(numLog) {
    var answer = '';
    numLog.forEach((v,i)=>{ 
        if(i < numLog.length -1){
             const twoEl = numLog.slice(i, i + 2);
            answer += calculate(twoEl);
        }     
    })
    return answer;
     
}

 function calculate(ary) {
    const [a, b] = ary;

    const v = b - a;

    switch (v) {
      case 1:
        return "w";
      case -1:
        return "s";

      case 10:
        return "d";

      case -10:
        return "a";
      default:
    }
  }