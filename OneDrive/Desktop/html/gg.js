function.prototype.mybind = function(obj,...args){
    let fun = this;
    return function(...args1){ // spread operator and args is name
        fun.apply(obj,[...args,...args1]);

    }

}

function fun(city, pincode){
    console.log("this",this);
    console.log(city);
    console.log(pincode);
}

let obj = {
    name: 'ruchi',
    hobby: "beautiful ulti"
};

let f = fun.mybind(obj,"delhi");
f(110051);

