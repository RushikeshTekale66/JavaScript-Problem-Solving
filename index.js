function sumOfThree(...elements){
    return new Promise((resolve, reject)=>{
        if(elements.length>3){
            reject("Only three elements are allowed");
        }
        else{
            let sum =0;
            elements.forEach(element => {
                sum +=element;
            });
            resolve(`Sume is : ${sum}`);
        }
    })
}

sumOfThree(1, 2, 4).then((result)=>console.log(result)).catch((error)=>console.log(error));