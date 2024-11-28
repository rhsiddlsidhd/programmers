function solution(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (arr[i] === stk[stk.length - 1]) {
      stk.pop();
      i++;
    } else if (arr[i] !== stk[stk.length - 1]) {
      stk.push(arr[i]);
      i++;
    }
  }

  if (stk.length === 0) {
    stk.push(-1);
  }

  return stk;
}
