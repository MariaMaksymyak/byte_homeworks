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

//let userMoneyAmount = 500;

//const amountToAdd = Number(prompt("How much to add?"))
//userMoneyAmount = userMoneyAmount + amountToAdd;
//alert("Now in your wallet: " + userMoneyAmount);

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

// Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
const guestName = "Манго";
const roomNumber = 207;
const greet =
  "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greet); // "Welcome Mango, your room number is 207!"


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
// || - або &&-i
console.log ("true && true", true && true); //true
console.log ("false || true", false || true); //true
console.log ("true && 'false'", true && 'false');
console.log ("0 && 1 || ' ' && 42", 0 && 1 || ' ' && 42); //42
console.log ("null == undefined", null == undefined); //true
console.log ("'' == 0", '' == 0); //true
console.log ("1 === '1'", 1 === '1'); //false
console.log ("NaN === NaN && true", NaN === NaN && true); //false
console.log ("true || false && true || false", true || false && true || false); //true
console.log ("(true || false) && (true || false)", (true || false) && (true || false)); //true
console.log ("10 || 0 && 'dog' || ''", 10 || 0 && 'dog' || ''); //10 


// Оператор НЕ !

const UserNam = prompt("Як вас звати?");
if (!UserNam) {
    alert("Ви не ввели ім'я!");
}

// Оператори порівняння
//рівнісь не залежно від типу
console.log('"a" == "a"' , "a" == "a"); //true
console.log('10 == 10' , 10 == "10"); //true
console.log('0 == false' , 0 == false); //true
console.log('" == 0' , "" == 0); //true

//!= не дорівнює
console.log('10 != 11' , 10 !== "11"); //true
console.log('42 != "42"', 42 !== "42"); //false

// === сттрога рівність з врахуванням типу
console.log("--------")
console.log('10 === "10"' , 10 === "10"); //false
console.log('"test" === "test"' , "test" == "test"); //true
console.log('0 === false' , 0 === false); //false

// > більше
// >= більш рівно
console.log('10 > 11', 10 > 11); // false
console.log('69 > 42', 69 > 42); // true
console.log('10 >= 10', 10 >= 10); // true

//< менше
//< менше рівно
console.log('10 < 100', 10 < 100); // true
console.log('50 > 49', 50 > 49); // false

//Умовний оператор:
// -if
// -switch
// -тернарний оператор

//IF
//якщо (виконуєься умова) {
//  виконуєься код ...
// (тіло умови)
//}

if (5 > 2) {
    console.log("5 більше ніж 2");
}

const isActive = confirm("Are you here?");
if (isActive) {
    alert("Thank you");
}


const a = 56;
const b = 10;
const condition = a > b;
if (condition) {
    alert(" a більше ніж b");
}

let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
console.log(type); // "adult"




//let type;
//const age = 20;
//if (age >= 18) {
//  type = "adult";
//} else {
//  type = "child";
//}
//console.log(type); // "adult"


//let type;
//const age = 20;

//if (age >= 18) {
 // type = "adult";
//} else {
 // type = "child";
//}
//console.log(type); // "adult"



//ELSE, ELSE IF

const currentYear = 2023;

//const userAnswer = Number(prompt (" What year is now?"));
//if (userAnswer === currentYear) {
//    alert(" you are right");
//} else {
//    alert(" your answer is incorect");
//}

//const userAnswer = Number(prompt (" What year is now?"));
//if (userAnswer === currentYear) {
//  alert(" you are right");
//} else if (userAnswer > currentYear) {
//    alert("Are you from the future?");
//} else{
//    alert("Are you from the past?");
//}


//const MIN_AGE =12;
//const visitorAge = Number(prompt( "Скільки вам років?"));
//const isWithParents = confirm("Ви з батьками?");

//if (visitorAge >= MIN_AGE || isWithParents) {
//    console.log("Досуп дозволено");
//} else {
//    console.log("Вік занадто малий для відвідування.");
//}


const number = 19;

if (number === 10) {
    console.log("Число рівне 10");
} else if (number > 10 && number <= 20) {
    console.log("Чиcло більше 10");
} else if (number >20 && number < 30) {
    console.log("Число більше 20 і менше 30")
} else {
    console.log("Число більше 30")
}

//SWITCH

const studentMark = Number(prompt("Введіть оцінку: "));

switch (studentMark) {
    case 5:
        alert("Прекрасно!");
        break;
    case 4:
        alert ("Добре!");
        break;
    case 3:
    case 2:
    case 1:
        alert("Не дуже добре :(");
    break;
    default:
        alert("Не знаю такої оцінки");
    }

    //Тернарний оператор (? :)
    const Number = Number(prompt("Enter your number: "));
    const result = number >= 10 ? "The Number is more than 10" : "The Number is less than 10";
    console.log('result', result);

    let result2;
    if (number > 10) {
        result2 = "The Number is more than 10";
    } else {
        result2 = "The Number is less than 10";
    }
    console.log('result' , result2);








