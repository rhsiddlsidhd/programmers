function solution(numbers) {
    var answer ="";
    let queue = [];
    // 글자 하나씩 반복해서 하나의 배열에 추가 
    // 배열에서 단어가 완성되면 return 
    // 문제점 : 배열 내의 value 의 string 화 
    // 조건을 one two three 로 만들어야함 
    // 조건에 array 를 받아서 join("") ?
    [...numbers].forEach((v,i)=>{
        queue.push(v)
        switch(queue.join("")){
                case "zero":
               answer += "0"  
               queue = [];
                break;
            case "one":
               answer += "1"  
               queue = [];
                break;
                case "two":
               answer += "2"
                queue = [];
                break;
                
                case "three":
               answer += "3"
                queue = [];
                break;
                case "four":
               answer += "4"
                queue = [];
                break;
                case "five":
               answer += "5"
                queue = [];
                break;
                case "six":
               answer += "6"
                queue = [];
                break;
                case "seven":
               answer += "7"
                queue = [];
                break;
                case "eight":
               answer += "8"
                queue = [];
                break;
                case "nine":
               answer += "9"
                queue = [];
                break;
            default:        
    }
    })
    return Number(answer);
}