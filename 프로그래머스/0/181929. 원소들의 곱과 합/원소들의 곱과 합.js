function solution(num_list) {
    var answer = 0;
    // 배열의 길이가 다른 숫자 배열
    // 비교연산
    // 곱이 높으면 1 제곱의 합이 높으면 0
    //reduce
    
    
  const multiply = num_list.reduce((acc,cur,i)=>{
       //A 는 모든 원소들의 곱   
    return  acc *= cur
        
    },1)
  
  const sum = num_list.reduce((acc,cur,i)=>{
       // 값 B는 제곱의 합 값
      return acc += cur
      
  },0) 

    answer = multiply > Math.pow(sum,2) ? 0 : 1 
    
    
    return answer;
}

