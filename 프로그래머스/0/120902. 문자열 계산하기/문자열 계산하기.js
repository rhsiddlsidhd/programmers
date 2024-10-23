function solution(my_string) {
    const formatString = my_string.split(" ");
    let firstValue = Number(formatString[0]);
    for(let i = 1; i< formatString.length ; i++){
        if(formatString[i] === "+"){
            firstValue +=Number(formatString[i+1])
        } else if(formatString[i] === "-"){
            firstValue -=Number(formatString[i+1])
        }
    }
    
    return firstValue;
}