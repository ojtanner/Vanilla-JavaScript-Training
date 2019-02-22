/*
Arrow functions vs normal functions
*/

let normalFunction = function() {
    //I am a normal function
}

let arrowFunction = () => {
    // I am an arrow funciton
}

/*
Lexical scope of arrow functions:

Arrow functions inherit the value of this
from the scope enclosing them.

This means that the context is preserved.
*/

/*
Normal function creates new lexical scope.
"this" does not point to objec anymore.
*/
let myObject = {
    a: "value of myObject.a",
    self: this,
    getA: function() {
        return (function () {return this.a})();
    },
    getBoundA: function() {
        return (function () {return this.a}.bind(myObject))();
    },
    getArrowA: function() {
        return (() => {return this.a})();
    }
}

function printA () {
    console.log("Normal function nested in method: ",myObject.getA());
    console.log("Normal function nexted bound to object",myObject.getBoundA());
    console.log("Arrow funciton nested in method: ",myObject.getArrowA());
}

printA();