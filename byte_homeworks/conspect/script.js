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

//const UserNam = prompt("Як вас звати?");
//if (!UserNam) {
//    alert("Ви не ввели ім'я!");
//}

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


//const a = 56;
//const b = 10;
//const condition = a > b;
//if (condition) {
//    alert(" a більше ніж b");
//}

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

//const currentYear = 2023;

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


//const number = 19;

//if (number === 10) {
  //  console.log("Число рівне 10");
//} else if (number > 10 && number <= 20) {
//    console.log("Чиcло більше 10");
//} else if (number >20 && number < 30) {
 //   console.log("Число більше 20 і менше 30")
//} else {
 //   console.log("Число більше 30")
//}

//SWITCH

//const studentMark = Number(prompt("Введіть оцінку: "));

//switch (studentMark) {
   // case 5:
        //alert("Прекрасно!");
       // break;
    //case 4:
       // alert ("Добре!");
       // break;
    //case 3:
    //case 2:
    //case 1:
        //alert("Не дуже добре :(");
    //break;
    //default:
       // alert("Не знаю такої оцінки");
    //}

    //Тернарний оператор (? :)
    //const Number = Number(prompt("Enter your number: "));
    //const result = number >= 10 ? "The Number is more than 10" : "The Number is less than 10";
    //console.log('result', result);

    //let result2;
    //if (number > 10) {
    //    result2 = "The Number is more than 10";
    //} else {
    //    result2 = "The Number is less than 10";
    //}
   // console.log('result' , result2);


//FUNCTIONS
// functionn імяФункції() {
// ... код який знаходиься в функції
//}

    //оголошення функції
//function showMessage() {
    //тіло функції, виконаєтться при виклику
//console.log("Привіт із функції!");
//}

//виклик функції
//showMessage();



//function getSum() {
 //   const num1 = Number(prompt ("Перше число:"));
 //   const num2 = Number(prompt ("Друге число:"));

  //  const sum = num1 + num2;
   // alert("Сума: " + sum);
//}

//getSum()
//getSum()

//function sayHallo(){
   // const message = "hello";
   // console.log('message', message);
//}
//sayHallo();



let userName = "";
function getUserName() {
    console.log('userName', userName);

    if (!userName) {
        userName = prompt("Як тебе звати?");
    }
}
getUserName();
console.log('userName', userName)

let login = "user1";

function getLogin() {
    let login = "admin2";

    login = prompt("ВВедіть логін");
    console.log('login локальна', login);
}

getLogin();
console.log('login глобальна', login);

//Аргументи (параметри) функції

const number1 = 10;
const number2 = 20;
const a = 100;
const b = 200;

function add(a,b) {
    console.log ('a', a);
    console.log('b',b);

    const sum = a + b;
    console.log('sum', sum);
}

add(1, 3);
add(number1, number2);
add(b, a);

// Повернення результату з функції RETURN

function getNumber() {
    return 8;
}

const number = getNumber();
console.log('number', number);


function getFullUserName(name, surname) {
    const result = name + " " + surname;
    return result;
}

const fullName = getFullUserName("John", "Brown");
console.log('fullName', fullName);

/////
function max(a, b) {
    return a > b ? a : b;
}
console.log ('max(10, 12)', max(10, 12))


//////
function getSum(a, b) {
    console.log("Старт функції");
    if (
        !a
        || !b
        || typeof a !== "number"
        || typeof b !== "number"
    ){
    console.log("Дані невірні");
    console.log("Return");
    return;
    }

    console.log(" Повертаємо суму");
    return a + b;
}
console.log("Перед викликом функції")
const sumResult = getSum(1, 2);
console.log('sumResult' , sumResult) 
console.log("Після виклику функції")


//Аргументи по замовчуванню

function showText(text = 'No text') {
    console.log(text)
}
showText('Hello, World');
showText()


function getChatText(text, name = 'Гість'){
    return name + ": " + text;
}

console.log(
    'getChatText("Привіт", "Марія")',
     getChatText("Привіт", "Марія")
);
console.log(
    'getChatText("Хай")',
    getChatText("Хай"),
);

function calculate(operation, a = 0, b = 0) {
    console.log('a' , a);
    console.log('b' , b);
    console.log('operation', operation);

    if (operation === "plus") {
        return a + b;
    } else if (operation === "minus") {
        return a - b;
    }
    }
calculate ('plus');

// ARROW FUNCTIONS
//Стрілочна функція

//function sum(a, b) {
    //return a + b;
//}

// const sum = (a, b) => {
    //return a + b
    //}

const sum = (a, b) => a + b;
const res1 = sum(4, 5)
console.log('res1', res1)


//LOOPS

//FOR
// for (старт (лічильник); умова; крок лічильника;) {
    // код який треба виконати багато раз}

console.log("Цикл плчав роботу");

for (let i = 0; i <5; i++) {
    console.log('Лічильник (i): ', i);
    console.log('Умова ${i} <5:' , i <5); 
}
console.log("Цикл закінчив роьботу")

for (let i =2; i <= 2048; i = i * 2) {
    //outputs 0, then 1, then 2
    console.log('i', i)
}

//Створимо лічильник
let counter = 0;

while (counter < 10) {
  console.log("counter: ", counter);
  counter += 1;
}

//for (let i = 2, j = 1; j < 20; i = i * 2, j++) {
  //  console.log('2 в степені ${j} = ${j} = ${i}');
//}

for(let i = 0; i < 20; i++) {
    const power = 2 ** i;
    //console.log('2 в степені ${i} = ${power}');
    const res = "2 в сепені " + i + ' = ' + power
    console.log(res)
}

//Порахуємо суму чисел до певного значення.
const target = 3;
let suma = 0;

for (let i = 0; i <= target; i += 1) {
  suma += i;
}

console.log(sum);


//Згадаємо про операцію a % b і виведемо остачу від ділення 
//за допомогою циклу.
//const max = 10;
//for (let i = 0; i < max; i += 1) {
 // console.log(`${max} % ${i} = `, max % i);
//}




// Зупинка циклу і пропуск інтеграції
// break

//const findFirstNumber = (start, finish, divider) => {
    //let targetNumber;
    //for (let i = start; i <= finish; i++ ){
        //if (i % divider === 0) {
            //targetNumber = i;
           // break;
        //}
    //}
    //return targetNumber;
//}
//const result = findFirstNumber(10, 50, 9)
//console.log('result', result)

const findFirstNumber = (start, finish, divider) => {
    for (let i = start; i <= finish; i++ ) {
        console.log('i' , i)
        if (i % divider === 0) {
            return i
        }
    }
};
const result = findFirstNumber(10, 50, 9)
console.log('result', result)

//CONTINUE

//const showEvenNumbers = (start, finish) => {
    //for (let i = start; i <= finish; i++) {
        //if (i % 2 !== 0) {
         //   continue;
        //}
        //console.log(i);
    //}
//};


const showEvenNumbers = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        if (i % 2  === 0) {
        console.log(i);
    }
}
};
showEvenNumbers(2,20)


//Вкладені цикли

//(табличка множення)
for (let i =1; i <= 9; i++) {
    let row = "";
    for (let j = 1; j <= 9; j++) {
        //consle.log('i, j', i,j);
        row = row + (i * j) + " ";
    }
    console.log(row);
}


//ЦИКЛИ ЦЕ ШВИДКО
console.time('Loop');

for (let i = 0; i < 10000000; i++) {
    // const a = 2 * i;
}

console.timeEnd('Loop');

// WHILE, DO WHILE
// while (виконуєься умова){
    // вираз
    //
//}

//Будемо заповнювати місця в готелі доти, 
//доки поточна кількість клієнтів не буде дорівнювати 
//максимально можливій.

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}


let password = "";

do {
  password = prompt("Введіть пароль довший 4-х символів", "");
} while (password.length < 5);

console.log("Ввели пароль: ", password);





let logName;
do {
    logName = prompt("ВВедіть ім'я: ");
    if(logName === null){
        break;
    }
    console.log('logName', logName);
} while (!logName);

