// Create a function that return a function

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"    
    }
};

var a = createHelloWorld();
console.log(a());
