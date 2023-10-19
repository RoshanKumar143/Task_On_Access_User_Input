let active = () =>{
    console.log("Entered in to Function")
    let userInputElement = document.getElementById('username-input').value;
    let emailIdElement = document.getElementById('email-id').value;
    let resultElement = document.getElementById('result'); 
    let resultValue = "Hello " +  userInputElement + " Your Account has Created with an Email-ID " + emailIdElement;
    resultElement.textContent = resultValue;
    console.log(resultValue);
}