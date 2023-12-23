// let firstName = "david";
// let gender = "male";
// let age = 20;
// age = age + 2;
// let me = true;
// console.log('are you okay ', me)
// console.log("Your name is ", firstName);
// console.log("your gender is ", gender);
// console.log("your age is ", age);

// document.getElementById('demo1').innerHTML = 'your name is ' + firstName
// document.getElementById('demo2').innerHTML = 'you are ' + age + 'years old'
// document.getElementById('demo3').innerHTML = "i'm a " + gender
// document.getElementById('demo4').innerHTML = 'are you lieing? ' + me

// arithmetic mudulos
// let sam = 20;
// sam /= 2
// console.log(sam)

// let sam = (1 + 2) * (1 + 2);
// console.log(sam)

// let sam = window.prompt("what's your status?");
// console.log(sam)

// let userName;

// document.getElementById('mySubmit').onclick = function(){

//     userName = document.getElementById('myText').value;
//     document.getElementById('myLabel').innerHTML = (window.alert('Hi ' + userName));
//     document.getElementById('myLabel').innerHTML = 'hi ' + userName;
//     console.log(userName) 
// }

// let count = 0;

// document.getElementById("increaseBtn").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("resetBtn").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("decreaseBtn").onclick = function(){
//     count -=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// boolean

// let joel = window.prompt("what's your age bro?");

// switch(joel > 30){
//     case 
// }

//dice

// let x;
// let y;
// let z;

// document.getElementById("labelbtn").onclick = function(){
//     x = Math.floor(Math.random() * 6) + 1;
//     y = Math.floor(Math.random() * 6) + 1;
//     z = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("label1").innerHTML = x;
//     document.getElementById("label2").innerHTML = y;
//     document.getElementById("label3").innerHTML = z;
// }

// let userName;

// document.getElementById("submit").onclick = function(){
//     userName = document.getElementById("floatingInput").value;
//     alert(userName)
// }
/*
let computerMove = '';

function myFunction1() {
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors'
    };
    //computer move
    let result = '';
    if (computerMove === 'rock'){
        result = 'You Win.'
    } else if (computerMove === 'paper'){
        result = 'You lose.'
    } else if (computerMove === 'scissors'){
        result = 'Tie.'
    };

    document.getElementById('output').innerHTML = `You picked rock.  computer pick ${computerMove}. ${result}`
}
//funtion 2
function myFunction2(){
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'rock'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
    computerMove = 'scissors'
}
// computer move
let result = '';
if (computerMove === 'paper'){
    result = 'You Win.'
} else if (computerMove === 'rock'){
    result = 'Tie.'
} else if (computerMove === 'scissors'){
    result = 'You lose.'
};
document.getElementById('output').innerHTML = `You picked paper. computer pick ${computerMove}. ${result}`

}

function myFunction3(){
    const randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'scissors'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'   
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'rock'
    }
    
    let result = '';
    
    if (computerMove === 'scissors'){
        result = 'You Win'
    } else if (computerMove === 'paper'){
        result = 'Tie.'
    } else if (computerMove === 'rock'){
        result = 'You lose.'
    }

    document.getElementById('output').innerHTML = `You picked scissors. computer pick ${computerMove}. ${result}`
    
}; */



function playGame(playMove){
    const computerMove = pickMove();
    let result = '';
    
    if (playMove === 'scissors'){
        if (computerMove === 'scissors'){
            result = 'You lose.'
        } else if (computerMove === 'paper'){
            result = 'You Win.'
        } else if (computerMove === 'rock'){
            result = 'You tie.'
        }
    } else if (playMove === 'paper'){
        if (computerMove === 'paper'){
            result = 'You lose.'
        } else if (computerMove === 'rock'){
            result = 'You Win.'
        } else if (computerMove === 'scissors'){
            result = 'You tie.'
        };
    } else if (playMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'You lose.'
        } else if (computerMove === 'paper'){
            result = 'You tie.'
        } else if (computerMove === 'scissors'){
            result = 'You Win.'
        };
    }

    document.getElementById('output').innerHTML = `You picked ${playMove}. computer pick ${computerMove}. ${result}`
    
}

function pickMove(){
    let computerMove = '';

    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors'
    };

    return computerMove;
}
