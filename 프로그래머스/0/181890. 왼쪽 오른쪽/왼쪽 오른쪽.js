function solution(str_list) {
    var answer ;

    const index = str_list.findIndex((v)=>v === "l" || v ==="r")

    if(index === -1){
       return answer = [];
    } 
    if(str_list[index] === "l"){
      answer = str_list.slice(0,index)
    } else if(str_list[index] === "r"){
        
       answer= str_list.slice(index+1);        
    }

    return answer;
}