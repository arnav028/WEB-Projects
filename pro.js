function createperson(){
    console.log("this here in create person:", this);
    function person(){
        console.log("this here in person function:",this);
    }
    person();
}
let ruchi = {
    name: "ruchi",
    age: "45",
    hobby: ["clean books"]
}
createperson.call(ruchi);