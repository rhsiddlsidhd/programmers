function solution(arr, intervals) {
   return  [...intervals].map(([n1,n2])=>[...arr].slice(n1,n2+1)).flat()
}