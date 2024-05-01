function solution(n) {
  const odds = []; 
  
  
  for (let i = 1; i <= n; i += 2) { 
    odds.push(i);
  }

  return odds; 
}