function mul(sum){
    console.log(sum*2);
    
}

function add(a, b, ope){
    let sum = a+b;
    ope(sum);
}

//mul is a callback function : it will execute after add function

add(200, 100, mul);
