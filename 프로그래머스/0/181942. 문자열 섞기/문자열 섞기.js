function solution(str1, str2) {
    var answer = '';
    
    [...str1].forEach((item,i)=>{
        
        answer +=item + str2[i]
    })
    
    return answer;
}