function solution(my_string, queries) {
    let myString = [...my_string];
    queries.forEach(([n1,n2])=>{
        while(n1<n2){
            [myString[n1], myString[n2]] = [myString[n2],myString[n1]];
            n1 ++
            n2 --
        }
    })
  
    return myString.join("");
}