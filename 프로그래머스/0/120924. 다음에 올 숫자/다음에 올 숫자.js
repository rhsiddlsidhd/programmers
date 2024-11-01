function solution(common) {
    var answer = 0;
    const [a,b,c] = common;
    if(b-a === c-b){
        return answer = common[common.length -1] +(b-a)
    } else{
        
        return answer =common[common.length -1] * (b/a)
    }
 
    
    return answer;
}