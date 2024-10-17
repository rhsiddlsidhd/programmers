function solution(my_string) {
    const result = [];
    [...my_string].forEach((v,i,arr)=>{
        if(!result.includes(v)){
            result.push(v)
        }
    })  
    return result.join("");
}

