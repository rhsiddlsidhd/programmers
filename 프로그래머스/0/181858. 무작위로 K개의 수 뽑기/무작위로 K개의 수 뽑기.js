function solution(arr, k) {
    var answer = [];
    let i = 0;
    
    while (answer.length < k && i <arr.length){
        if(!answer.includes(arr[i])){
            answer.push(arr[i])
        } 
        i++;
    }
    if(answer.length !== k){
        answer = [...answer,...Array(k-answer.length).fill(-1)]
    }
    
    return answer;
}