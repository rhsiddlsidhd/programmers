function solution(my_strings, parts) {
    var answer = '';
    [...parts].forEach(([n1,n2],i)=> answer += my_strings[i].slice(n1,n2+1))
    return answer;   
}