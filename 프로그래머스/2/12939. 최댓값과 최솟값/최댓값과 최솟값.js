function solution(s) {
    let prevMin, prevMax;
    
    s.split(" ").forEach((w,i)=>{
       const num = Number(w);
     prevMin = i ===0 ? num : Math.min(prevMin,num);
    prevMax = i === 0? num : Math.max(prevMax,num);
    })

return `${prevMin} ${prevMax}`
}