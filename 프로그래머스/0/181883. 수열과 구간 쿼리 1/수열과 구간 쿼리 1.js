function solution(arr, queries) {
    for(let i=0; i< queries.length; i++){
        const [n1,n2] = queries[i];
       for(let j = n1; j <= n2; j++){
           arr[j] += 1
       }
    }
    return arr;
}

//0 <= i <= 1 , 1 <= i <= 2 , 2<= i <= 3 

// 1 1 0 0 0 
// 0 1 1 0 0
// 0 0 1 1 0