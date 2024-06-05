/* let str =  "hello learning ankur singh"
console.log(str);
/* for (let i = 0 ; i< str.length ; i++){
    console.log(str[i]) */

/* let index = str.indexOf("ankur");
console.log(index);

let arr = str.split(' ');
console.log(arr);

let str1 = arr.join('_');
console.log(str1);

let file = 'http://localhost:3333/file.mp4';
arr = file.split('/');
console.log(arr);
let fileName = arr.pop();
console.log(fileName);

let fileExtension = fileName.split('_').pop();
console.log(fileExtension);

functions */ */

function hello(){
/*     console.log("helllo world");
 */    return "hello world";

}
function add (a,b){
    return a+b;
}
let sum = add(10,20);
console.log(sum);
let x = hello();
console.log(x);
console.log(typeof x);

function sum0pt(a,b){
    if(typeof(a) == 'number' && typeof(b) == 'number') return a+b;
    return "Both values should be integer only";
}
let y = sum0pt(10,"20");
console.log(y);