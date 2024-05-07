function solution(my_string) {
    let result = '';


    for (let char of my_string) {
     
        if (char === char.toUpperCase()) {
         
            result += char.toLowerCase();
        } else {

            result += char.toUpperCase();
        }
    }

    return result;  
}