// let personSimple = "John Doe"

// const personObject = {
// firstName : "John",
// lastName : "Doe",
// age :50,
// eyeColor : "blue",

// }
// personObject.age = 10

// console.log(personSimple);
// console.log(personObject);
// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         console.log(`meu nome é ${this.name} e tenho ${this.age} anos`)
//     }
// }

// const user1 = new User('joao',30);
// user1.introduce();

class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese
    }
    getDescription() {
        return `a delicious pizza with ${this.base} base, ${this.sauce} sauce,
    ${this.toppings} toppings, and lots of ${this.cheese}. `;
    }
    getTimer() {
        if(this.base == 'traditional'){
        return 10;
    } else if (this.base == 'integral'){
        return 15
    } else{
        return 'this base does not exist!'
    }
}
getTimerSauce(){
    if(this.sauce == 'tomato'){
        return 10
    }else if(this.sauce == 'pesto'){
        return 15
    }else{
        return 'this sauce does not exist'
    }
}
getTimerToppings(){
    if(this.toppings == 'peperoni'){
        return 18
    }else if(this.toppings == 'calabresa'){
        return 20
    }else{
        return 'this topping does not exist!';
    }

}
getTimerCheese(){
    if(this.cheese == 'muzzarela'){
        return 25
    }else if(this.cheese == 'catupiry'){
        return 30
    }else{
        return 'this cheese does not exist!'
    }

}
}
const myPizza = new Pizza('integral', 'pesto', 'calabresa', 'catupiry');
console.log(myPizza.getDescription());
console.log('preço de assar = ' + myPizza.getTimer());
console.log ('preço para o molho = ' +myPizza.getTimerSauce())
console.log ('preço para o recheio = ' +myPizza.getTimerToppings())
console.log ('preço para o queijo = ' +myPizza.getTimerCheese());

let totalTime =  myPizza.getTimer()  +myPizza.getTimerSauce() +myPizza.getTimerToppings() +myPizza.getTimerCheese() ;

console.log("Time for pizza: " + totalTime);