function solution(number) {
    var counter = 0; 
    for(let i =0; i< number.length ; i++){
        for(let j=i+1; j< number.length; j++){
            for(let q=j+1; q < number.length ; q++){
                if(number[i]+number[j]+number[q] === 0){
                    counter++
                }
            }
        }
    }
    return counter;
}