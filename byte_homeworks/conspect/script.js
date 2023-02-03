//Variable змінні

let firstVariable;
firstVariable = "Hello World"
console.log(firstVariable);



//Data types

//Numbers
//const num1 = 1;
//const num2 = 2;

//const result = num1 + num2;
//console.log(`result`, result);

//String (строки тексу, склеювання слів)
const string = 'Hello!';
console.log('typeof string', typeof string);

const greeting = 'Hello';
const space = ' ';
const name = 'Maria';

const fullGreeting = greeting + space + name;
console.log('fullGreetig', fullGreeting);

//Boolean (логічні,відповідь на питання, true/false)
const isUserOnline = false;
const hasPermission = true;

const comparisonResult = 5 > 2;
console.log('comparisonResult', comparisonResult);


const isLinkVisited = true;
if (isLinkVisited) {
    console.log("Посилання відвідувалася");
} else {
    console.log("Посилання не відвідувалося");
}

//Undefined
//NULL



// Types conversion (переведення даних)
// String ()


//user interaction

//показ повідомлень - ALERT
//alert("Hello");
//alert(42);
//const winMessage = "Congratulation! You won!";


//отримання інформації - Prompt
//const userName = prompt("What is you name?");
//console.log('userName', userName)

//alert("Hallo " + userName + " !");

// якщо користувач натисне Cancel Ecs то результат prompt буде NULL
//const userAnswer = prompt("How are you?");
//console.log('userAnswer', userAnswer);

//prompt() завжди повертає тип даних String

let userMoneyAmount = 500;

const amountToAdd = Number(prompt("How much to add?"))
userMoneyAmount = userMoneyAmount + amountToAdd;
alert("Now in your wallet: " + userMoneyAmount);

//  підтвердити - confirm

const isAdmin = confirm("Are you admin?");
console.log(`isAdmin`, isAdmin);
if (isAdmin) {
    alert("welcome!");
}

const userNickname = prompt("Your nickname?");
const userAge = prompt("How old are you?");

const isConfirmed = confirm(
    'Are you really ${userNickname}, ${userAge} yeras old'
    );

    if (isConfirmed) {
        alert("Your data saved!");
    }


//OPERATORS

// - Арефметичні оператори +-/* ...
const num1 = 10;
const num2 = 3;
let operationResult;
//додавання
operationResult = num1 + num2;
console.log('10 + 3 =', operationResult);

//множення
operationResult = num1 * num2;
console.log('10 * 3 =', operationResult);

//віднімання
operationResult = num1 - num2;
console.log('10 - 3 =', operationResult);

//ділення
operationResult = num1 / num2;
console.log('10 / 3 =', operationResult);

// - Логічні оператори &&

