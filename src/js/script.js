'use strict';

let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let addData = {
    moneyData : money,
    timeData : time,
    expenses : "",
    optionalExpenses: "",
    income : [],
    savings : false
};

console.log(addData.timeData);

let answerFirst = prompt("Введите обязательную статью расходов в этом месяце");
let answerSecond = prompt("Во сколько обойдется?");

addData.expenses = {
    answerFirst: answerSecond
};

alert("Бюджет на день : " + addData.moneyData/30);