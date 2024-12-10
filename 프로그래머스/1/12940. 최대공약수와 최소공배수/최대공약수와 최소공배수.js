function solution(n, m) {
    //최대 공약수 GCD 유클리드 호제법 
    //최소 공배수 LCM = 두 수의 곱 나누기 최대 공약수
    const gcd = (a,b)=> a%b === 0 ? b : gcd(b,a%b);
    const lcm = (a,b)=> a * b / gcd(a,b);
    
    return [gcd(n,m),lcm(n,m)];
}