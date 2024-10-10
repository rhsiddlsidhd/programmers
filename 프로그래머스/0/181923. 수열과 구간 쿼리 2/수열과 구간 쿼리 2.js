function solution(arr, queries) {
    var answer = [];
    
    //조건1. s < index < e
    //조건2. 해당 모든 index k보다 크면서 가장 작은 arr[i] 찾는다.
    
   queries.forEach(([s,e,k])=>{
        let list = []
        
      for(let i=s; i<= e ; i++){
         if(arr[i] > k){
             list.push(arr[i])
         } 
      }
        if(list.length === 0){
            answer.push(-1)
        } else{
            answer.push(Math.min(...list))
        }

    })
    
   
    
    return answer;
}

