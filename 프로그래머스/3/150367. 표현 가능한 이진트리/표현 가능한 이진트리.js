function checkBinaryTree(now){
    let mid = Math.floor(now.length/2);
    let parent = now.charAt(mid)
    let leftChild = now.substring(0,mid);
    let rightChild = now.substring(mid+1,now.length)
   
    if(parent ==="0" && (leftChild.charAt(mid/2) === "1" || rightChild.charAt(mid/2) ==='1')){
        return 0;
    }
    
    if(leftChild.length >= 3){
        if(checkBinaryTree(leftChild)=== 0 ){
            return 0 ;
        }
    }
    if(rightChild.length>= 3){
        if(checkBinaryTree(rightChild)=== 0){
            return 0 ;
        }
    }
    return 1;
}

function solution(numbers) {
    var answer =  [...numbers].map((v)=> v.toString(2).length);

    for(let i=0; i<answer.length; i++){
        let now = numbers[i].toString(2)
        let n = 1 ;
        while( 2 ** n -1 <now.length){
          n++   
        }
        const treeHeight = 2 ** n -1;
        now = now.padStart(treeHeight,'0');
        answer[i] = checkBinaryTree(now)
        
    }

    return answer;
}

