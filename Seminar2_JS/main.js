/*Cоздать функцию greeting, которая принимает в качестве параметра имя человека и 
выводит приветствие, используя переданное ей имя, в консоль.
Необходимо продемонстрировать работу функции: у пользователя запросить его имя и вызвать функцию greeting, 
передав туда полученное от пользователя значение. */
function greeting(nick) {
    console.log('Hello, '+nick);    
}
const user = prompt('Enter your name: ');
greeting(user);


/* Задача 1: 
// Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример):
// Результат сложения чисел 5 и 2 равен 7.
let num1 = Number.parseFloat(prompt('Enter first number'));
let num2 = Number.parseFloat(prompt('Enter second number'));
function sum(a,b) {
    return a+b;
}
const roundSum = Math.round(sum(num1,num2)*100)/100;
alert('Sum numbers of '+num1+"and "+num2+' equals '+roundSum); */

/* Задача 2: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну, вы держитесь там!”. 
if (confirm('Вам хорошо живется?')) {
    alert('Тогда мы идем к вам!');
} else {
    alert ('Ну, вы держитесь там!');
}*/

/* Задача 3: Переписать код на switch
//if (product == "мандарины") {
// alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "бананы") {
// alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "груши") {
// alert('Бананы и груши стоят 70 руб/кг.');
// } else {
// alert('Нет такого продукта.');
// } <
// /script> */

/* const product = prompt("Введите продукт");
switch (product.toLowerCase()) {
case 'мандарины':
alert('Мандарины стоят 100 руб/кг');
break;
case 'бананы':
case 'груши':
alert('Бананы и груши стоят 70 руб/кг.');
break;
default:
alert('Нет такого продукта.');
}*/

/* Задача 4. Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(array) {
    let maxElement = array[0];
    for (let index = 2; index < array.length; index+=2) {
        if (array[index] > maxElement) {
            maxElement = array[index];
        }       
    }
    return maxElement;
}
 
alert(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31 */

/* Задача 5. Перевести градусы Цельсия в Фаренгейты.
const temperatureC = Number.parseFloat(prompt('Введите темпатуру в градусах Цельсия'));
const temperatureF = (9/5)*temperatureC+32;
alert('Цельсий = '+temperatureC + ', Фаренгейт = '+temperatureF);*/