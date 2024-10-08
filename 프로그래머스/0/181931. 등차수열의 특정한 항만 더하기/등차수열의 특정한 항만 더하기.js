

function solution(a, d, included) {
    
//      a가  a += d 증가하면서 inclueded.length 만큼 반복해야해  
   var answer = included.reduce((acc,cur,i)=>{

        if(cur){
            return acc += a + i * d
        }
       
        return acc;
    },0)
    
    return answer;
}