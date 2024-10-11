  function solution(arr) {
    var answer = [];
    
    //arr 안에 있는 반복 횟수를 뽑아낸다 
    
    arr.forEach((v,i,a)=>{
        for(let j = 0; j < v ; j++){       
            answer.push(v)
        }
    })
    
   
    return answer;
}