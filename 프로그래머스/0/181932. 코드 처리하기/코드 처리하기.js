function solution(code) {
    
    // 모드를 호출하는건 v = 1 일때 toggle
    // 모드 함수 호출하면 규칙이 변경 
    
    var answer = '';
    let mode = false;
    [...code].forEach((v,i)=>{
        if(v==="1"){
            mode = !mode   
        } else {
            if(!mode && i % 2 ===0){
            answer += v
        }
        if(mode &&  i % 2 === 1) {
                   answer += v
        } 
        }
        
    });
    
    return answer === "" ? "EMPTY" : answer;
}
