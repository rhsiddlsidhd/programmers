function solution(order) {
    var answer = 0;
   
    order.forEach((v)=>{
        v.includes("cafelatte") ? answer += 5000 : answer +=4500
    })

    return answer;
}