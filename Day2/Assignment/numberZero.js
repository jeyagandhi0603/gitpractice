

function numberType(number){
let output="";
    if(number>0)
    {
        output="positive";
    }
    if(number<0)
    {
        output="negative";
    }
   else
    {
        output="zero";
    }
    return output;
}

console.log(numberType(10)); 
console.log(numberType(-5)); 
console.log(numberType(0));