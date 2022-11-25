// filter method 

const arr = [1,2,3,4,5,6];

const isEven=function (number){
    return number%2==0;
}

const dec= arr.filter(isEven);

console.log(dec);