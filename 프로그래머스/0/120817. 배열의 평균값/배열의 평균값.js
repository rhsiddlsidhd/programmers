function solution(numbers) {
  const result = numbers.reduce((acc, cur) => acc + cur / numbers.length, 0);
  return result;
}