function add(a){
    return function(b){
        console.log(a+b);
        
    }
}
//Old technique
let result = add(10);
result(10);

//Curring
add(10)(30);


