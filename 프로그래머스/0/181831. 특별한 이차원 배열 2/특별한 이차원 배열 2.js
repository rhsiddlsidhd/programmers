function solution(arr) {
  return arr.every((r,i)=>r.every((v,j)=>v === arr[j][i])) ? 1 : 0
}