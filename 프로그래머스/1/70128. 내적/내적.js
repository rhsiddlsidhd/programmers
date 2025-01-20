function solution(a, b) {
    var answer;
    
    answer= a.reduce((acc,cur,i)=>{
          return  acc += cur * b[i]
            
    },0)
    
 
    return answer;
}