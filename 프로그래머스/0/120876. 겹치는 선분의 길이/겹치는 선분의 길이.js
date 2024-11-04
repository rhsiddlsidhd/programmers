function solution(lines) {
    var answer = 0;
    
    const line = new Array(200).fill(0)
    // console.log(line)
    
    lines.forEach(([min,max])=>{
        for(;min<max ; min ++){
                  line[min+100]++
        }
    })
    return answer = line.filter((v)=>v > 1).length;
}