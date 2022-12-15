let s_name:string="Hani"; // declaring a variable in typescript
console.log(s_name);


let userid:number=22; //declaring a number in typescript
let isonline:boolean= true; //declaring a number in typescript

// function in typescript
function addtwo(num:number){
    return num+2;
}
function getuper(val:string){
    return val.toUpperCase();
}


// function with mutiple parameters
function signupuser(name:string ,email:string ,password:number){}
// function calling 
signupuser("Hani","Hani@gmail.com",123);


// arrow function
let loginuser= (name:string,email:string,ispaid:boolean)=>{}
// function calling 
loginuser("Hani","Hani@gmail.com",true);

export{};



