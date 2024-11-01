function solution(quiz) {
    var answer = [];
    let numbers = [];
    let operator ="";
    let result = 0;

    quiz.forEach((v,_,arr)=>{
const convert = v.split(" ").slice(0,v.split(" ").indexOf("="));
const lastEl = v.split(" ").pop();
       
        for(let i = 0; i < convert.length ; i++){
            if(isNaN(convert[i])){
             operator = convert[i]
            } else{
                numbers.push(parseInt(convert[i]))
            }
        }
          //연산이후 numbers 청소
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
        if(result !== parseInt(lastEl)){
            answer.push("X")
        } else{
            answer.push("O")
        };
        
    })
    
    return answer;
}