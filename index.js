var katsDeliLine = [];
var testArr =[];


function takeANumber(currentLine, newPerson){
  //extra assignment to fix .push is not a function error
  currentLine.push(newPerson);
  
  //we add the newPerson into the currentLine

  //find the just added person in the currentLine and give the position they are in. It would be +1 since arrays start at 0.

      return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}
var ticket = 0;

function takeANumber(currentLine){
  ticket++
  currentLine.push(ticket);
  //Welcome you have ticket number [number]
  return `Welcome you have ticket number ${ticket}`;
}

console.log(takeANumber(katsDeliLine, 'Ada'));
console.log(takeANumber(katsDeliLine, 'Grace'));
console.log(takeANumber(katsDeliLine, 'Kent'));

function nowServing(currentLine){
  //if the first item in the array is undefined then there is no one in the currentLine.
  if(currentLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    //splice removes the first name in the array and returns it
    var currentServing = currentLine.splice(0,1);
    return `Currently serving ${currentServing}.`;
  }
}

console.log(nowServing(katsDeliLine));

function currentLine(currentLine){
  //this array will hold the new string we will create
  var stringArray = [];
  
  //checks if the line is empty by checking the first item in the array and function will return if it is empty
  if(currentLine[0] === undefined){
    return "The line is currently empty."
  }
  
  //for loop will go trough all the names and add them to the stringArray, must add 1 to the 0 array index for customer place. 
  for(var i = 0; i < currentLine.length; i++){
    stringArray[i] = ` ${i+1}. ${currentLine[i]}`;
  }
  
  //use .join to add the array together into a string. Could be simplified to one line.
  stringArray = stringArray.join();
  return `The line is currently:${stringArray}`;
}

console.log(currentLine(katsDeliLine));
