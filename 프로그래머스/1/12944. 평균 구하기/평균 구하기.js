function solution(arr) {
    
   let sum = arr.reduce((it,num) =>it+num ,0)
   
   let answer = sum / arr.length
    return answer;
}