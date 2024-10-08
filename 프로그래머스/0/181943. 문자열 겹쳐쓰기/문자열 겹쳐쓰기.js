function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    
    
    const pre = my_string.slice(0,s)
    
    
    const remainder=my_string.substring(s + overwrite_string.length)
    
    
   
    
    
    
    answer = `${pre}${overwrite_string}${remainder}`
    
    

    
    
    
    return answer;
}