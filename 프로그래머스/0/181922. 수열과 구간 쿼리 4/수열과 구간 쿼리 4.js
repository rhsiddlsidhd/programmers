function solution(arr, queries) { 
    // s ~ e 의 범위의 i 
    // 모든 i % k === 0 이라면
    // arr[i] += 1 한다 
   return  queries.reduce((acc,[s,e,k])=>{
        for(let i = s ; i <= e ; i++){
            if(i % k === 0)
                acc[i]++
        }
            return acc;
        },[...arr])
    }
