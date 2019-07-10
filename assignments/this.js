/* The four principles of "this"; 
* In your own words. explain the four principles for the "this" keyword below.
*
* 1. Window binding - when using the "this" keyword in global scope it will return the window/console object.
* 2. Implicit binding - when using implicit binding the "this" keyword will refer to whatever is left of the "."
* 3. New binding - New binding occurs when using a constructor funtion along with the "new" keyword which will allow the "this" keyword to point to the new object that has been created.
* 4. Explicit binding - this occurs when you specifically use .call, .apply, or .bind on a function. This is explicit binding because you are explicitly passing in a "this" context using .call, .apply, or .bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var windowBind = function () { 
    console.log(this); 
}; 
windowBind();

// Principle 2

// code example for Implicit Binding

const ImplicitBind = {
    name: `Implicit-Binding`,
    date: `today`,
    message: function() {
        return `Here is an example of ${this.name} created ${this.date}.`;
    }
};

console.log(ImplicitBind.message());

// Principle 3

// code example for New Binding


function NewBinding(speak, name) {
    this.name = name;
    this.speak = speak;
    this.says = function(){
        return `${this.name} says: ${this.speak}.`
    }
    }
    
    test = new NewBinding('Hello', 'Jesse');
    test2 = new NewBinding('Good-bye', 'Emma')
    console.log(test.says());
    console.log(test2.says())


// Principle 4

// code example for Explicit Binding

const vegetable = {
    name: 'Pineapples'
}

const uses = ["Drinks", 'Salads', 'Salsa'];

function sayUses(use1, use2, use3) {
  return `${this.name} can be used in ${use1}, ${use2}, and ${use3}.`
}

const vegieDescription = sayUses.bind(vegetable, ...uses);

console.log(vegieDescription());