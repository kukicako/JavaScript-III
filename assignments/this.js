/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - in global scope, the value of this is the window object.

* 2.Implicit Binding-when function called by a dot then the object before the dot is 'this' 


* 3.New Binding- when constructor func is used 'this' refers to the instance of the object created and returned but the the constructor function.


* 4. Explicit Binding- When javascripts call or apply method is used then 'this' becomes explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function eatFood(burgers){
    console.log(this);
    return burgers;
}
eatFood("thats burning my mouth!");


// Principle 2
// code example for Implicit Binding
let myEyes = {
    vision: 'bad',
    eyes: function(){
        console.log(this.vision)
    }
}
myEyes.eyes();

// Principle 3
// code example for New Binding
function Running(sprinting){
    this.fitness = sprinting;
}
let myRunning = new Running('I am fast boi')
console.log(myRunning.fitness);

// Principle 4
// code example for Explicit Binding
function food(){
    console.log(this.taste);

}
let myFood ={
    name: 'pasta',
    taste: 'tasty',
}
food.call(myFood);
