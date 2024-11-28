// function solution(my_string) {
//     var answer = [];
//     let wrap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//      wrap = wrap.split("")
//     const alphabet = new Map();
//      wrap.forEach((v)=>{
//         alphabet.set(v, 0)
//     }) ;
//     [...my_string].forEach((v)=>{
//          alphabet.set(v,alphabet.get(v)+1)
//      })
//     for(const [k,v] of alphabet){
//         answer.push(v)
//     } 
//     return answer;
// }



function solution(my_string) {
    const arr = Array(52).fill(0);
    let wrap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    wrap = wrap.split("");
 [...my_string].forEach((v)=>{
        const index = wrap.indexOf(v); 
        arr[index] += 1; 
    })
    return arr;
}

