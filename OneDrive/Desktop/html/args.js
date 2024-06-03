let arr =[1,2,3,4];
let arr1 = [6,7,8,9,10];

let newarr = [...arr,...arr1];
console.log(newarr);

function sum (...args){
    return args.reduce((accum,val)=>accum+val);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));