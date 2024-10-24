function solution(keyinput, board) {
    const center = [0,0];
    const x = board.map((v)=>{
       const r=  (v -1) / 2
       return r
    })
    const result = Number(center[0]) + -1 
    keyinput.forEach((v,i)=>{    
        switch(v){
                case"left":
                center[0] = Math.max(center[0] + -1, -x[0])
                break;
                case"right":
                center[0] = Math.min(center[0] + 1, x[0])
                break;
                case"up":
                center[1] = Math.min(center[1] + 1, x[1])
                break;
                case"down":
                center[1] = Math.max(center[1] + -1, -x[1])
                break;
            default:
                break;
        }
    })
    return center;
}



// ' ' ' ' ' ' ' ' '

// ' ' ' ' ' ' ' ' ' ' '