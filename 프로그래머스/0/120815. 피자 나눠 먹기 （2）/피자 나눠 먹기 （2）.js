function solution(n) {
    var pizza = 1;
    while (pizza * 6 % n){
        pizza ++
    }
    
    return pizza;
}