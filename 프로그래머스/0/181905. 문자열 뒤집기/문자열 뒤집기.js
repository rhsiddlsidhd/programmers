function solution(my_string, s, e) {
    const arr = [...my_string];
    const n = arr.slice(s,e+1).reverse();
    arr.splice(s,n.length,...n)
    return arr.join("");
}
