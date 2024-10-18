function solution(n) {
    var i = 0;
    //길이가 주어지지 않음
    let fac = 1;
    while (fac <= n) {
      i++;
      fac *= i;
    }

    return i - 1;
  }