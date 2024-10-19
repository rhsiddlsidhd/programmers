function solution(my_string) {
    var answer = 0;
    let prev = "";
    
    [...my_string].forEach((v)=>{
        if(!isNaN(v)){
            prev += v
        } else {
            //문자라면 Number(prev) answer로 옮기고 prev 초기화 
            answer += Number(prev);
          prev = "";
        }
    })
    if (prev !== "") {
        answer += Number(prev);
    }
   
    
    return answer;
}