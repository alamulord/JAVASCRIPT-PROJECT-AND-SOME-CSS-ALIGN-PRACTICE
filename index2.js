/*
let sass = {
    name: 'samsom',
    sex: 'male'
}

// console.log(sass)
let mine = JSON.stringify(sass)
console.log(mine)
let dav = JSON.parse(mine)
console.log(dav)
*/
// console.log(sass)
/*
function convertToFahrenheit(celcius){
    Fahrenheit = (celcius * 9/5) + 32;
    console.log(Fahrenheit);
}
convertToFahrenheit(25);

function covertToCelcius(fahrenheit){
    Celcius = (fahrenheit - 32) * 5/9;
    console.log(Celcius)
}
covertToCelcius(86);

function convertTemperature(degrees, unit){
    Celcius = (degrees - 32) * 5/9;
    Fahrenheit = (unit * 9/5) + 32;
    console.log(`${Celcius} C, ${Fahrenheit} F`)
}
convertTemperature(86, 25);*/
/*
const datas = {
    name: 'david',
    age: 12
};

datas.name = 'david gecko'
console.log(datas.name);
*/
/*
const data2 = {
    name: 'daniel',
    'delivery-man': 'coke',
    class: {
        primary1: 23,
        primary2: 10
    }
}

console.log(data2);
console.log(data2.name);
console.log(data2['name']);
console.log(data2['delivery-man']);
console.log(data2.class);
console.log(data2.class['primary1'] + data2.class['primary2'])
console.log(JSON.stringify(data2));

// console.log(JSON.parse(data2));

function fun(){

    localStorage('message', 'hello')
}
console.log(localStorage.getItem('hello'))*/
const btn = document.getElementById('menu-btn').innerHTML;
const nav = document.getElementById('menu').innerHTML;

btn.addEventListener('click', ()=>{
    btn.classList.toggle('open')
})