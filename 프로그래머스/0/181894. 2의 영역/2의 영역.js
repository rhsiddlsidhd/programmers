function solution(arr) {
    const s = arr.indexOf(2);
    const l = arr.lastIndexOf(2);
    const a = arr.slice(s,l+1);

    return a.length===0 ? [-1] : a;
}