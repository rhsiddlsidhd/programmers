function solution(money) {
const coffee = 5500;
let total = Math.floor(money / coffee);
let price = money % coffee
    
   return [total,price]
  
   
}

