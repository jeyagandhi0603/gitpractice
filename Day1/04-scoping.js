

//Scoping 
//function scoped


function greet(){

    var message = "Hello team I am a function scoped statement"

  //  console.log(message); // this message is wothin the function scope
    
}

console.log(message); // I have moved the message variable out of function => ReferenceError: message is not defined

greet()


//bock scope

