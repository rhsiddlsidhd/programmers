function solution(sides) {
    var answer = 0;
    let n = [];
    const sorted = sides.sort((a,b)=>b-a)
    const max = sorted[0] + sorted[1]
    const min = sorted[0] - sorted[1]
    for(let i = min + 1 ; i< max ; i++){
            n.push(i)
    }
    answer = n.length
    
// [1,2,n]
// a + b > c     3 > n
// a + c > b    1 + n -1  > 2 -1
// 1 < n < 3 
        
    
// [3,6] 6 < 3 + n === n = 3 ~ 무한까지 이지만 제한은 6  [4 5 6]
//추가조건
// 나머지 가 오히려 길때 6 < n < 9 (3+6)    
    
// 9 > n
// 3 + n -3> 6 -3
// 6 + n > 3     
    // 3 < n < 9
    
    
// [11,7] 11 < 7 + n === n = 5 < 11 [ 5 6 7 8 9 10 11 ]    
// 나머지가 오히려 길 때 11 < n < 18 [ 12 13 14 15 16 17]
// 18 > n
// 11 + n > 7
// 7 + n > 11    
//     4 < n < 18 
    
//     for(let i = 0;i<)
    
    
    
    
    
    return answer;
}