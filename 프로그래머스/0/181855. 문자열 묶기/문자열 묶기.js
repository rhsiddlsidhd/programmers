function solution(strArr) {
  const mapA = new Map();
for(const v of strArr){
    mapA.set(v.length,mapA.get(v.length) +1 || 1)
}
console.log(mapA)    
  return Math.max(...mapA.values());
}
