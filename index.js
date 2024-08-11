function handle(){
    click = !click;
    return click;
}

let click = true;

for(let i=0; i<10; i++){
    console.log(handle());
    
}


