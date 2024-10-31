function solution(chicken) {
    var answer = 0;
    let coupon = chicken ;
    // 110마리 시켰어 쿠폰은 110장 왔어 11마리를 시켜먹네 그러면 또 쿠폰이 11개 생기고 또 나누기 10 하면 1 나머지 1 남는다.
 while(coupon > 9){
    answer += Math.floor(coupon / 10) 
    coupon = Math.floor(coupon/10) + Math.floor(coupon% 10)
}

    return answer;
}