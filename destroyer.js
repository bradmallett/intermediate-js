// You will be provided with an initial array 
// (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that 
// are of the same value as these arguments.
// Note: You have to use the arguments object.
//doing things...

function destroyer(arr) {
  const myArgs = Array.prototype.slice.call(arguments);
  let compArray = myArgs.shift();

  for(let i = 0; i < myArgs.length; i++) {
   if(compArray.includes(myArgs[i])) {
     compArray = compArray.filter(item => item != myArgs[i]);
   }
  }

  return compArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// returns [1, 1]