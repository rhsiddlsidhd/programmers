function solution(n) {
    //합성수 = 1과 자기 자신 약수 제외하고 약수를 가진 자연수   
    let v = []; 
    for(let i=2;i <= n ; i++){
        for(let j = 2; j < i; j++){
            if(i % j ===0){
                v.push(i)
            }
        }       
    }
    const set = new Set(v)
    return set.size;
}