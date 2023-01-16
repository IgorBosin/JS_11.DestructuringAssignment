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
    
    
    
Задача №3. Вывести при помощи переменных: false, ['html', 'css'], 'css'
let user = {
    name: 'Igor',
    info: {
        work: false,
        skills: ['html', 'css'],
    }
}
let {info: {work, skills, skills: [a, b],}} = user
console.log(work, skills, b)    

    
    
Задача №4. Изменить функцию, чтоб внутри не обращаться к имени объекта

let user = {
    firstName: 'Igor',
    lastName: 'Bosin',
}

function myPerson() {
    return user.firstName
    
function myPerson({ firstName }) {
    return firstName   
}
    
console.log(myPerson(user))
    
    
