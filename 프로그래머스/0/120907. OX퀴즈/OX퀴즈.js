function solution(quiz) {
    var answer = [];
    quiz.forEach((v,_,arr)=>{

const [expressions, expressionResult] = v.split(' = ');
const expression = expressions.split(" ")
let numbers = [];
let operator ="";
        for(let i = 0; i < expression.length ; i++){
            if(isNaN(expression[i])){
             operator = expression[i]
            } else{
                numbers.push(parseInt(expression[i]))
            }
        }
          //연산이후 numbers 청소
            let result;
            switch(operator){
                case "+":    
                  result = numbers.reduce((acc,cur)=>{
                  return  acc + cur
                },0)  
                numbers = [];
                break;
                case "-":
                   result = numbers.slice(1).reduce((acc,cur)=>{
                   return acc - cur
                },numbers[0]) 
                numbers = [];
                break; 
                default:
            }
        answer.push(result === parseInt(expressionResult) ? "O":"X")
    })
    
    return answer;
}