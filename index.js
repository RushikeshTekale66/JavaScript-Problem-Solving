
const arr = [8, 7, 6, 5, 4, 3, 2, 1 ];
console.log("Direct array prienting");
console.log(arr);

console.log("For each loop");

arr.forEach(element => {
    console.log(element);
    
});

console.log("Using let variable");
for(let i=0; i<arr.length; i++){
    setTimeout(()=>{
        console.log(arr[i]);
        
    }, 1000)
    
}

console.log("Using var variable");
for(var i=0; i<arr.length; i++){
    setTimeout(()=>{
        console.log(arr[i]);
        
    }, 1000)
    
}
