function solution(n, control) {
    
    
    // w += 1 , s -= 1 d += 10, a-= 10
    
    [...control].forEach((v, i) => {
      switch (v) {
        case "w":
          n += 1;
          break;
        case "s":
          n -= 1;
          break;
        case "d":
          n += 10;
          break;
        case "a":
          n -= 10;
          break;
        default:
          break;
      }
    });
    
    
    return n;
}