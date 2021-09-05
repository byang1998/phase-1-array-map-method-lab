//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.



const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//invoke means how to execute the function 
function titleCased(){
    

  return tutorials.map(sentence => {
    //.split creates a comma at every space, can also create a comma at specified pattern. EX: after every o ("o")
    let words = sentence.split(" ");
    console.log(words)
    let newwords = words.map(word => {
       word.slice(0,1).toUpperCase() + word.slice(1)
       return titleCased()
       
    } )
    });
  };

