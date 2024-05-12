function solution(num_list, n) {
    if (n >= num_list.length) return num_list;
    
    const firstPart = num_list.slice(n);
    const secondPart = num_list.slice(0, n);
    
    return firstPart.concat(secondPart);
}