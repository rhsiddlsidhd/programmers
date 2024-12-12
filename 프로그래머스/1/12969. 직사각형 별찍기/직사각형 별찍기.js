process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const arr = Array.from({length:b},()=>Array.from({length:a},()=>"*"));
    
    const result = arr.map((v)=>console.log(v.join("")))
    
});