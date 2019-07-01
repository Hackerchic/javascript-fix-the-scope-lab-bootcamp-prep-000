function fixTheScope(n){
  return n
}



function myAnimal() {
  var animal = 'dog'
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
function itDoesNotHardcodetheAnswer(){
  return "answer"
}

n = Math.floor(Math.random() * 1000)
function add2(n) {
return n + 2
}

 var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }
  
var theFunk = funkyFunction
var theFunk = funkyFunction()()
 





