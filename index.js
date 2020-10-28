/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


const submissions = document.querySelectorAll('input');
//Validation regex patterns to pass id inputs through
const patterns = {
  numberInputValue: /^\d+$/,
  firstNumber: /^\d+$/,
  secondNumber: /^\d+$/,
  stringCapitalize: /^[a-zA-z ]+$/ ,
  stringLastLetter: /^[a-zA-z ]+$/ ,

  
};
  
  submissions.forEach((submission)=>{
    submission.addEventListener('keyup',(e)=>{
     // console.log(e.target.attributes.name.value);

      validate(e.target, patterns[e.target.name])
    });
  });

  //validation function takes in inputs and matches them with patterns regex 
  function validate(field,regex){
  if (regex.test(field.value)){
    console.log("valid") 
    field.className="valid"
  }
    else{
    console.log("invalid") 
    field.className="invalid"
   }
  }
//runs function to add 7 to the value inputted
function add7() {
  classNameValue = document.getElementById('numberInput').className;
  if (classNameValue=="valid"){ 
    let numberInput = parseInt(document.getElementById("numberInput").value);
    console.log(numberInput);
    //adds to the users input
    let result = numberInput + 7;
    console.log(result);
    document.getElementById("answer1").innerHTML = "The answer is " + result;
  }
  else {
    alert("Please Enter a Number!")
  }}


function multiply() {
 classNameValue = document.getElementById('firstNumber').className;
 classNameValueTwo = document.getElementById('secondNumber').className;
 if (classNameValue=="valid" || classNameValueTwo =="valid"){
   //asks for the users' inputs  
   let numberInputOne = parseInt(document.getElementById("firstNumber").value);
   let numberInputTwo = parseInt(document.getElementById("secondNumber").value);
   //multiplies both inputs from the user
   let result = numberInputOne * numberInputTwo;
   console.log(result);
   document.getElementById("answer2").innerHTML = "The answer is " + result;
 }
 else {
   alert("Please Enter a Number!")
 }
}

function capitalize() {
  classNameValue = document.getElementById('stringCapitalize').className;
  if (classNameValue=="valid"){ 
    let numberInputOne = document.getElementById("stringCapitalize").value;
    //splices user input and capitalizes first letter
    let stringToCap = numberInputOne.charAt(0).toUpperCase();
    console.log(stringToCap);
    let stringTwoToCap = numberInputOne.slice(1);
    console.log(stringTwoToCap);
    let result = stringToCap.concat(stringTwoToCap);
    console.log(result);
    document.getElementById("answer3").innerHTML = "The answer is " + result;
  }
  else {
    alert("Please Enter Only Letters!")
  }
}

function lastLetter() {
  //checks for the valid or invalid class attatched to the id
  classNameValue = document.getElementById('stringLastLetter').className;
//conditional check of the class name
  if (classNameValue=="valid"){ 
    let numberInputOne = document.getElementById("stringLastLetter").value;
    console.log(numberInputOne);
    //outputs first value backwards of users input 
    let stringToCap = numberInputOne.substr(-1);
    console.log(stringToCap);
    console.log(stringToCap);
    let result = stringToCap;
    console.log(result);
    document.getElementById("answer4").innerHTML = "The answer is " + result;
  }
  else {
    alert("Please Enter Only Letters!")
  }
}

