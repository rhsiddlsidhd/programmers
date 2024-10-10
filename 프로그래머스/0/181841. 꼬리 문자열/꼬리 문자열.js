  function solution(str_list, ex) {
    var answer = '';
    //includes

    answer =str_list.filter((v)=>{
     return  !v.includes(ex)
    })
    
    
    return answer ? answer.join("") : answer;
}