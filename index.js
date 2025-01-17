function add(a, b, operation){
    let sum = a+b;
    operation(sum);
}

function mulBy2(sum){
    console.log(sum*2);
}

add(10, 20, mulBy2);