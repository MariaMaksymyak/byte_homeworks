
//Задание 1

//Напишите функцию, которая будет принимать 2 числа в качесте аргументов 
//и возвращать результат их сравнения.
//Если числа равны - функция должна вернуть true
//Если не равны - false.

function getNumber() {
const num1 = Number(prompt ("Перше число:"));
const num2 = Number(prompt ("Друге число:"));

if (num1 === num2) {
    console.log("true");
} else {
     console.log("false")
}}

getNumber()

//Задание 2

//Написать функцию для получения суммы чисел, которая принимает в себя 2 числа в качестве аргументов, 
//и возвращает их сумму. Необходио написать 2 варианта, как стрелочную, так и обычную функции.
//Вызовите ее несколько раз с разными значениями.


//function getSum() {
//const number1 = Number(prompt ("Перше число:"));
//const number2 = Number(prompt ("Друге число:"));

//const sum = number1 + number2;
//console.log("Сума: " + sum);
//}
//getSum()


function getSum(a, b) {
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
    return a + b;
}

const sumResult = getSum(5, 200);
console.log('sumResult' , sumResult) 



//Задание 3

//Напишите функцию для возведения числа в степень
//функция принимает 2 аргумента, число, с которым нужно провести операцию и необходимую степень
//степень является НЕОБЯЗАТЕЛЬНЫМ аргументом, значением по умолчанию является число 2
//функция должна вернуть результат операции

function getExponention(x, n) 
{
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("Введіть число:", '');
  let n = prompt("Введіть степінь?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( getExponention(x, n) );
  }
  getExponention ('plus');
  


//Задание 4

//Реализуйте функцию, которая будеи принимать в себя число от 1 до 7, а возвращать строку, 
//которая будет собой представлять день недели.
//В случае, если число не соответсвует дню недели, верните строку "Такого дня нет"
//yourFunction(2) // Вторник
//yourFunction(6) // Суббота
//yourFunction(10) // Такого дня нет

const numberDayoftheWeek = Number(prompt ("ВВедіть число щоб дізнаися назву дня тижня:  "));


    switch (numberDayoftheWeek) {
       case 1: alert("Понеділок");
       break
        case 2: alert( "вівторок");
        break;
        case 3: alert("середа");
        break;
        case 4: alert( "четвер");
        break;
        case 5: alert( "п'ятниця");
        break;
        case 6: alert("субота");
        break;
        case 7: alert( "неділя");
        break;
        default: alert("Такого дня немає");
    }

//Задание 5* (необязательное)

//Написать функцию, которая будет спрашивать у пользователя его имя и возраст, и с помощью alert 
//приветствовать его.
//Далее, если возраст больше 30, то показать сообщение с приветсвием 
//Здавствуйте, <Имя Пользователя>
//Если меньше, сообщением будет Привет, <Имя Пользователя> 
//(в треугольных скобках должно быть значение имени, введенной пользователем)


function getUserName() {
const userNickname = prompt("Your nickname?");
const userAge = prompt("How old are you?");
  
  if (userAge >= 30) {
      alert ("Здравствуйте " + userNickname );
  } else {
     alert ("Привет " + userNickname );
  }}
  getUserName()






