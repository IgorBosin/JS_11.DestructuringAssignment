Задача №1. Создание функции, которая возвращает имя самого высокооплачиваемого сотрудника.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let startVal = 0
    let startKey = null

    for (let [key, value] of Object.entries(salaries)) {
        if (value > startVal) {
            startVal = value
            startKey = key
        }
    }
    return startKey
    
    
    
Задача №2. Создание функции, которая возвращает имя самого НИЗКООПЛАЧИВАЕМОГО сотрудника.    

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let startVal = Infinity
    let startKey = null

    for (let [key, value] of Object.entries(salaries)) {
        if (value < startVal) {
            startVal = value
            startKey = key
        }
    }
    return startKey
