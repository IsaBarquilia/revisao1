function Person() {
    
let name = document.getElementById("name").value;
let lastName = document.getElementById("lastname").value;
let age = document.getElementById("age").value;
let eyesColor = document.getElementById("eyesColor").value;

const personObject = {
    firstName : name , 
    lastName :  lastName,
    age: age,
    eyeColor: eyesColor
};
document.getElementById("result").innerHTML = `${personObject.firstName}`
document.getElementById("resultLast").innerHTML = `${personObject.lastName}`
document.getElementById("resultAge").innerHTML = `${personObject.age}`
document.getElementById("resultColor").innerHTML = `${personObject.eyeColor}`
}