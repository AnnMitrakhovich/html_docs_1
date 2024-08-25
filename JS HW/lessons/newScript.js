// Задание 1
let getDegree = (a) => a ** 3;
let sum = (a,b) => a + b;
console.log(sum(getDegree(2), getDegree(3)));

// Задание 2
let userNumber = +prompt('Введите число');
checkUserNumber(userNumber);

function checkUserNumber(num) {
    if(isNaN(num)){
        console.log("Passed value is not a number");
    }
    countSalary(num);       
}
function countSalary(salary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary * 0.87}`);
}


// Задание 3
let findMaximum = (a,b,c) => Math.max(a,b,c)
let askUser = () => +prompt('Введите число');
console.log(findMaximum(askUser(), askUser(), askUser())); 


// Задание 4
let sumNumbers = (a,b) => console.log('Cумма равна ' + (a + b)); 
function differenceNumbers (a,b) {
    let minNumber = Math.min(a,b);
    let maxNumber = Math.max(a,b);
    console.log('Разность чисел равна ' + (maxNumber - minNumber)); 
} 
let multiplicationNumbers = (a,b) => console.log('Произведение чисел равно ' + (a * b)); 
function divisionNumbers (a,b) {
    let minNumber = Math.min(a,b);
    let maxNumber = Math.max(a,b);
    console.log('Частное чисел равно ' + (maxNumber / minNumber)); 
} 
sumNumbers(2,6);
differenceNumbers(2,6);
multiplicationNumbers(2,6);
divisionNumbers(2,6);