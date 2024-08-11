//pass the element using rest(...) method
function add(...arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
            sum = sum + arr[i];
    }
    return sum;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
//copy the array 1 into array 2 using spread operator(...)
let arr2 = [10,20,30 , ...arr];

console.log("New array is " , arr2);


console.log("Addition of array is ", add(1,2,3,4,5,6,7,8,9,10));
