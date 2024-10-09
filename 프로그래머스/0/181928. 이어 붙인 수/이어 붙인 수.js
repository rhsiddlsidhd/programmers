function solution(num_list) {
    var answer = 0;
        // 짝수 홀수 구분하여 새로운 두 배열 구성
    
   const odd = num_list.filter((v,_)=>{
        return v % 2 !==0
    })
   const even = num_list.filter((v,_)=>{
       return v % 2 ===0
   })
    answer = Number(calculate(odd)) + Number(calculate(even))
    return answer;
}

function calculate(inc){
    const value = inc.reduce((acc,cur)=>{
           return  acc += cur
    },"")
    return value
}