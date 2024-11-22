function add(a){
    return function(b){
        console.log("Addition is : ", (a+b));
    }
}

const result = add(10)(10);
