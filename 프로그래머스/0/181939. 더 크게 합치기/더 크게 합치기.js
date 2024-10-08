function solution(a, b) {
    var answer = 0;
    let pre= a.toString() + b.toString() ;
    let next= b.toString() + a.toString();
    
    
    if(Number(pre) >Number(next)){
        answer = Number(pre);
        
    } else{
        answer = Number(next);
    }
    
    

    
    
    return answer;
}