function add(){
    return function(){
        console.log("Addition is : ", (10+10));
    }
}

const result = add();

//Higher order function
result();