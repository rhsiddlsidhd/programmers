function solution(names) {
    const groupSize = 5;  
    const result = [];    

    for (let i = 0; i < names.length; i += groupSize) {
        
        result.push(names[i]);
    }

    return result; 
}