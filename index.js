alert(`Welcome to the password generator`)
let userFirstName = prompt(`What is your first name?`)
confirm(`Can you confirm that your first name is ${userFirstName}?`)
let userLastName = prompt(`What is your last name?`)
confirm(`Can you confirm that your last name is ${userLastName}?`)
let userColor = prompt(`What is your favourite colour?`)
confirm(`Can you confirm that you favourite colour is ${userColor}?`)
let randomNumber = String(Math.round(Math.random() * 200))
alert(`Your extremely insecure password is ${userFirstName}${userLastName}${userColor}${randomNumber}`)



console.log("Your password is", userFirstName,userLastName,userColor,randomNumber)