//Проведите все доступные в JS математические операции 
//с этими переменными (+, -, /, *). Результат каждой операции выведите в консоль. 
//Подпишите каждое значение, что бы было понятно, чем является каждое значение в консоли.


const_a = 5;
const_b = 10;

//додавання
operationResult = const_a + const_b;
console.log('5 + 10 =', operationResult);

//множення
operationResult = const_a * const_b;
console.log('5 * 10 =', operationResult);

//віднімання
operationResult = const_a - const_b;
console.log('5 - 10 =', operationResult);

//ділення
operationResult = const_a / const_b;
console.log('5 / 10 =', operationResult);

//піднесення до степеню
console.log ('5 ** 10 = ', 5 ** 10);

//залишок від ділення
console.log('5 % 10 = ', 5 % 10); //1

//унарний мінус
console.log('-const_a = ', -const_b); 

//Без запуска кода ответьте, какое значение будет результатом каждого из выражений ниже, а также напишите, является это значние правдивым или ложным.

true && true 
false || true 
true && 'false'
0 && 1 || ' ' && 42
null == undefined 
'' == 0
1 === '1'
NaN === NaN && true
true || false && true || false
(true || false) && (true || false)
10 || 0 && 'dog' || ''
(10 || 0) && ('dog' || '')