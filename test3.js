// here we are going to review objects in js

/*
Objects are collection of various data and more complex entities.
Objects are created using curly braces {...}. Inside, you will have a list of properties.
A property is a pair: key:value. Think of key as a propery's name.
A key is always a string. A value can be of any type.
*/
let user  = new Object();  // same as doing this: let user =  {};
let user2 = {
    name : "Reza",
    age: 40,
    degree: "Computer Science"
};

alert(user2.name)
alert(user2.degree)

//delete user2.age
alert(user2.age)

user2["loginID"] = "rnezami"
//alert("user2 loginID is " + user2.loginID)
//alert("user2 loginID is " + user2["loginID"])

//let key = prompt("What do you like to know about the user?", "degree")
//alert("User's property value for "+ key + " is " + user2[key])


// how to check for existence of a property:
alert("age" in user2)
console.log("Printing all user2 properties names:\n")
for (key in user2)
    console.log(key)