function solution(array) {
    var answer = 0;
    let maxValue = 0; 
    const mapA = new Map();
    [...array].forEach((v)=>{
        mapA.set(v,(mapA.get(v) || 0)+1)
    })
    for(const [key,value] of mapA.entries()){
        if(value >maxValue ){
            maxValue = value
            answer= key
        }else if(value === maxValue){
            answer = -1
        }
    }
  

  
    
    return answer;
    
}