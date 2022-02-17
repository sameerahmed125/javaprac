// Challenge 1: age in days
function ageIndays() {
    var birthYear = prompt('What is your birth year?');
    var ageIndayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageIndayss + ' days old.');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}
function reset() {
    document.getElementById('ageIndays').remove();
}

// challenge 2: cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'https://cdn2.thecatapi.com/images/14c.gif';
    div.appendChild(image);
}

// challenge 3: Rock paper scissors

function rpsGame(yourChoise) {
    var humanChoice = yourChoise.id;
    var botChoice = numTochoice(randCom());
    console.log(humanChoice, botChoice);
    result = chooseWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoise.id, botChoice, message)

}
function randCom() {
    return Math.floor(Math.random() * 3);
}

function numTochoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function chooseWinner(yourChoice, ComputerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }

    };

    var yourScore = rpsDatabase[yourChoice][ComputerChoice];
    var computerScore = rpsDatabase[ComputerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    }
    else if (yourScore === 1) {
        return { 'message': 'You won!', 'color': 'green' };
    }
    else {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    
    // images data base for result
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    
    // remove images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // creating new div
    var humDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    // inner html for div
    humDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' width='230px' height= '165px' style='box-shadow: 10px 12px 18px  rgb(132, 200, 255);'>"
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+"; padding: 30px; font-size:60px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' width='230px' height= '165px' style='box-shadow: 10px 12px 18px  rgb(132, 200, 255);'>"

    //showing in frontend
    document.getElementById('flex-box-rps-game').appendChild(humDiv);
    document.getElementById('flex-box-rps-game').appendChild(messageDiv);
    document.getElementById('flex-box-rps-game').appendChild(botDiv);

}

// // Challenge 4: change background color

// var all_buttons = document.getElementsByTagName('button');

// var copyallButtons = []

// for(i=0; i<all_buttons.length; i++){
//     copyallButtons.push(all_buttons[i].classList[1]);
// }
// console.log(copyallButtons)

// function changeColor(buttonThingy){
//     if (buttonThingy.value === 'red'){
//         buttonRed()
//     }
//     else if (buttonThingy.value === 'green'){
//         buttonGreen()
//     }
//     else if (buttonThingy.value === 'yellow'){
//         buttonYellow()
//     }
//     else if (buttonThingy.value === 'blue'){
//         buttonBlue()
//     }
//     else if (buttonThingy.value === 'reset'){
//         buttonColorReset()
//     }
//     else if (buttonThingy.value === 'random'){
//         randomColor()
//     }

// }

// function buttonRed(){
//     for (i=0; i<all_buttons; i++){
//         allbuttons[i].classList.remove(all_buttons[i].classList[1]);
//         allbuttons[i].classList.add('btn-danger');
//     }
    
// }
