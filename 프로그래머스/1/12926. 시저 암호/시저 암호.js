function solution(s, n) {

    let lowercaseVerify = "abcdefghijklmnopqrstuvwxyz"
    let uppercaseVerify ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
    return [...s].map((value)=>{
        if(value === " ") return " ";
        
        const verify =  lowercaseVerify.includes(value) ? lowercaseVerify : uppercaseVerify;
        
        const newIndex = (verify.indexOf(value) + n) % 26;
       
        return verify[newIndex]
    }).join("")
}