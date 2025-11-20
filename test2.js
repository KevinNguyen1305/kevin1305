// passing functions as parameters to another function

// we want to create a function which asks a question from user
// and if the answer is yes, it executes func1 and if the answer is
// no, executes function func2

function askUser(question, func1, func2) {
    // leave this for you for now
    if(confirm(question))
        func1()
    else
        func2()
}

// to be called if the user agrees
function agreed() {
    alert("You agreed");
}

// to be called if the user disagrees.
function disagreed() {
    alert("You did not agree!");
}

// let's use askUser():
//askUser("Do you agree?", agreed, disagreed)

/*
askUser("Do you like to travel?", 
    function() {alert("Glad you like travelling")}, 
    function() {alert("Too bad. I was going to ask you to travel together!")}
);
*/

//Arrow functions
// this way of creating functions is called arrow function because we use arrow to express it:
let sum = (a, b) => a + b

alert("sum(1, 3) = " + sum(1, 2))