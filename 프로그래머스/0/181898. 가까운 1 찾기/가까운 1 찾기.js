function solution(arr, idx) {
 return arr.findIndex((v,i)=>idx <= i && v === 1);
}