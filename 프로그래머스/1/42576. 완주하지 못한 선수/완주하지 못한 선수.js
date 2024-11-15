function solution(participant, completion) {
    const table = new Map();
    
    participant.forEach((v,_)=>table.set(v,(table.get(v)||0)+1))
    completion.forEach((v,_)=>table.set(v,(table.get(v)-1)))       

    for(const [key,value] of table){
        if(value > 0) return key
    }

    return null;
}