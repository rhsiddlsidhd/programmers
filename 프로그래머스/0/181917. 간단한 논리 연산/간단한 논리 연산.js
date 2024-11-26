function solution(x1, x2, x3, x4) { 
    return (x1 || x2) && (x3 || x4)
}


//AND 둘중 모두 true 여야 true 하나라도 false 라면 false => 아래로 향한 표시

//OR 둘중 하나만 true 여도 true => 위로 향한 표시