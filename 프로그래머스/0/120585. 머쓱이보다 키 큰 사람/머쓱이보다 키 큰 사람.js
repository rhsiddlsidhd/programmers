function solution(array, height) {
  let count = 0;
  array.forEach((it) => {
    if (it > height) {
      count++;
    }
  });
  return count;
}