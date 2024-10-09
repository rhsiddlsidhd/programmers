function solution(num_list) {
     //num_list.slice(-2) // 원본훼손 X
    const lastTwoElement = num_list.slice(-2);
    const value = compare(lastTwoElement)
    return [...num_list, value]
    
}

function compare(ary) {
        const [a,b] = ary;
        const count = a >= b ? b * 2 : b - a
        return count
}