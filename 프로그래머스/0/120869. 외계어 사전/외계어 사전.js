function solution(spell, dic) {
    var answer = 2;
    const regExp = spell.sort().join("");
    //dic 반복문으로 문자열 하나씩 도출
    //문자열 + spell 찢어서 sort
    // 매치 이후 ? 1 : 2     
    dic.forEach((v)=>{
       if(regExp === v.split("").sort().join("")){
           return answer = 1
       } 
    })

 
    
    return answer;
  }