// Code your solutions in this file

function writeCards (array, event ){
    let newArray = []

for (let a=0; a < array.length; a++) {
  newArray.push(`Thank you, ${array[a]}, for the wonderful ${event} gift!`)
debugger;
}
    return newArray;
}
function countDown(startingNumber){
while(startingNumber >=0){
console.log(startingNumber);
startingNumber--;
}
}
countDown(20)
