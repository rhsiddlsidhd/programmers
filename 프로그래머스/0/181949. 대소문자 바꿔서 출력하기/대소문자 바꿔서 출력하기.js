const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    function comPiler(str){
       
        const strArray = str.split("")
        let result = ""
        strArray.forEach((item)=>{
            if(item === item.toUpperCase()){
                result += item.toLowerCase()
            } else{
                result += item.toUpperCase()
            }
        })
        return console.log(result)
    }
    comPiler(str)
    
});