function solution(numer1, denom1, numer2, denom2) {
    //최대 공약수
    const gcd = (a,b) => {return a % b === 0 ? b : gcd(b, a % b)}
    let numer = numer1 * denom2 + numer2 * denom1
    let denom = denom1 * denom2;
    let $gcd = gcd(numer,denom)
    return [numer/$gcd, denom/$gcd ];
}