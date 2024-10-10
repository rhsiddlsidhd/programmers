function solution(arr, queries) {
    queries.forEach(([i,j])=>{
    let c = arr[i]
    arr[i] = arr[j] 
    arr[j] = c  
    })
    return arr;
}