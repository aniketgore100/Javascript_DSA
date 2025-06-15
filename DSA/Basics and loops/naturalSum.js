const num = 0;

if(isNaN(num)){
    console.log("Please enter a valid number");
}else{
    if(num > 0){
        let sum = 0;
        for(let i = 1; i<=num; i++ ){
            sum = sum + i
        }
        console.log(sum)
    }else{
        console.log("Please enter a positive number")
    }
}