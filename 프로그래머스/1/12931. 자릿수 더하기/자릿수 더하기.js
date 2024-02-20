function solution(n)
{
    
   let stringArr = String(n).split("")
   
   const result = stringArr.reduce((acc,cur)=>Number(acc) +Number(cur) ,0)
    
  
    return result
    

}