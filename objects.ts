//  create a function and pass an object as a parameter
function createuser({name:string, ispaid: boolean}){}
// calling a function
createuser({name :"Hani",ispaid: true})




//  creating another function
//  es function ma paranthesis k baad jo colon or curly brackets hain
//  that shows function's returning part and after that curly brackets 
//  shows function's definition
function newcourse():{course_name:string, price:number}{
    return {course_name:"Typescript", price: 400}
}


export{}