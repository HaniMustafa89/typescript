"use strict";
exports.__esModule = true;
//  |=> this sign indicates union
//  score is a variable, |=> shows that either string or number value will be stored
var score = 33;
score = "90";
score = 77;
// 
var myprofile = { name: "Hani", id: 768 };
myprofile = { username: "hanizk06", id: 768 };
// function with union
function getid(id) {
    console.log("db id is ".concat(id));
}
getid(12); // function calling with int
getid("12"); // function calling with string
// array 
var data1 = [1, 2, 3]; // if we are storing numbers in one array then we can store only numbers, no mixed
var data2 = ["1", "2", "3"]; // if we are storing strings in one array then we can store only strings, no mixed
var data3 = [1, "2", 3, "4", true]; //in this, we can store mix i.e numbers, strings and boolean
