function solution(num, total) {
    var answer = [];
    let count = total;
    let result ;
    //total 이 length 라면 12 11 10 > 11 10 9 > 10 9 8 > 9 8 7 > 7 6 5 > 6 5 4 > 5 4 3 return은 sort로 
    while (true){
    const numbers = Array.from({length:num},(_,i)=> count + i );
        
    result=numbers.reduce((acc,cur)=>{return acc + cur},0)   
        if (result === total) {
             answer = numbers.sort((a,b)=>a-b);
           return answer ;
        } else {
             count--
        }
    }
    return answer;
}


