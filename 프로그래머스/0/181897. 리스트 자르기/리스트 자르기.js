function solution(n, slicer, num_list) {
    var answer =[]; 
    const [n1,n2,n3] = slicer;
    switch(n){
        case 1 :
           answer = num_list.slice(0,n2+1);
            break;
        case 2 : 
           answer = num_list.slice(n1,num_list.length);
            break;
        case 3 :
           answer = num_list.slice(n1,n2+1) ;
            break;
        case 4:
            const r = num_list.slice(n1,n2+1);
            for(let i =0; i<r.length; i += n3 ){
                answer.push(r[i])
            }
            break;
        
    }
    return answer;
}