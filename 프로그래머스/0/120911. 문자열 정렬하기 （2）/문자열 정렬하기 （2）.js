function solution(my_string) {
    var answer = '';
    
    
    // 소문자로 바꾸기 => 알파벳 순서대로 정렬
    answer =[...my_string.toLowerCase()].sort().join("")

    return answer;
}