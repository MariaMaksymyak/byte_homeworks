
//Задание 1
//Используя разные типы циклов (for, while и do while) выведите в 
//консоль числа в промежутке от 1 до 10. Потренируйтесь, и с помощью этих же циклов 
//выведите числа от 20 до 10, в порядке уменьшения.

let counter = 1;

while (counter <= 10) {
  console.log("counter: ", counter);
  counter += 1;
}

for (let i =1; i <= 10; ) {
    console.log("counter: ", counter);
  counter += 1;
}




//Задание 2
//Вывести простые числа в заданном промежутке
//Натуральное число, большее 1, называется простым, 
//если оно ни на что не делится, кроме себя и 1.

//Реализуте функцию, которая будет принимать 2 аргумента 
//(от какого до какого числа искать простые числа)
//Поочередно выведите в консоль простые числа из данного промежутка.
//Например:

//для промежутка 1 и 10 результат будет 2,3,5,7
//для 20 и 100 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


///Задание 3* (опциональное)

//Дополнить классную работу счетчиком количества попыток

//Пользователь иммет только 3 попытки авторизации. Попробуйте разные варианты реализации, через цикл for и цикл while. отправьте на проверку более элегантный по вашему мнению вариант.

//При использовании каждой попытки пользователю должен показываться alert с сообщением об оставшемся количесве попыток