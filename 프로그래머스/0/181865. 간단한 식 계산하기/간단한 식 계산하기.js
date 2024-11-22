function solution(binomial) {
  var answer ;
  const [s1,op,s2] = binomial.split(" ");
  let n1 = Number(s1);
  let n2 = Number(s2);
  switch(op){
      case "+":
      answer = n1 + n2;
          break;
      case "-":
      answer = n1 - n2;
         break 
          case"*":
      answer =n1 * n2;
      default:
  } 
  return answer;
}