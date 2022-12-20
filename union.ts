//  |=> this sign indicates union
//  score is a variable, |=> shows that either string or number value will be stored
let score:number | string=33;
score="90";
score=77;

// user defined data_type
type user={
    name:string;
    id:number;
}
// another user defined data_type
type admin={
     username:string;
     id:number;
}
// 
let myprofile:user | admin ={name:"Hani",id:768};
myprofile={username:"hanizk06", id: 768};

// function with union
function getid(id:number|string){
    console.log(`db id is ${id}`);
}
getid(12);      // function calling with int
getid("12");    // function calling with string


// array 
const data1 : number[] | string[] =[1,2,3];  // if we are storing numbers in one array then we can store only numbers, no mixed
const data2 : number[] | string[] =["1","2","3"]; // if we are storing strings in one array then we can store only strings, no mixed


const data3 : (number | string | boolean)[] =[1,"2",3,"4", true];//in this, we can store mix i.e numbers, strings and boolean

export{}