function solution(num_list) {
    var answer = [];
    //num_list.slice(-2) // 원본훼손 X
    const lastTwoElement = num_list.slice(-2);
    const value = compare(lastTwoElement)
    answer = [...num_list, value]
    return answer;
}

function compare(inc) {
        const [a,b] = inc;
        const count = a >= b ? b * 2 : b - a
        return count
}