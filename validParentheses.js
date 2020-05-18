var isValid = function(s) {
  if (s.length === 0){
    return true;
  } 
  // blank string is true 

  if (s.length % 2 === 1){
    return false; 
  }
  // you cant have an odd number of parentheses and be valid

  let stackLikeArray = [];
  let charArray = s.split('');
  
  // add to stack adding to the end 
  // push to add to end pop to remove last value 

  for (let i = 0; i < charArray.length; i++){
    
    if (charArray[i] === "{" || charArray[i] === "[" || charArray[i] === "("){
      let addToStack = stackLikeArray.push(charArray[i]); 
    }
    
    if (charArray[i] === "}" &&  stackLikeArray[stackLikeArray.length - 1] === "{"){
      let removeLast = stackLikeArray.pop();
    }
     if (charArray[i] === "]" &&  stackLikeArray[stackLikeArray.length - 1] === "["){
      let removeLast = stackLikeArray.pop();
    }
     if (charArray[i] === ")" &&  stackLikeArray[stackLikeArray.length - 1] === "("){
      let removeLast = stackLikeArray.pop();
    }
  }
  if (stackLikeArray.length > 0){
    return false;
  } else {
    return true;
  }   
};

const str='([)]'; 
