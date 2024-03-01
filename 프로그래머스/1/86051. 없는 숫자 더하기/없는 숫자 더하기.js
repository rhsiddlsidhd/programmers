function solution(numbers) {
  
    const allNumbers = Array.from({ length: 10 }, (_, i) => i);

    const missing = allNumbers.filter(num => !numbers.includes(num));

    const sum = missing.reduce((acc, num) => acc + num, 0);

    return  sum;
}