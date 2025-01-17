function add(...args){
    let result = 0;
    for(let i=0; i<args.length; i++){
        result = result + args[i];
    }
    console.log(result);
    
}

add(2, 3, 4, 5, 6, 6);
