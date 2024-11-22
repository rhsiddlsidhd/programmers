function solution(number) {
    return [...number].reduce((acc,cur)=>acc += parseInt(cur,10),0) % 9
}