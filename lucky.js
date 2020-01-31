let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let name1 = document.querySelector('#person1').value;
let name2 = document.querySelector('#person2').value;



// change image function runs on click and display the winner
function changeImage() {

    let player1 = document.querySelector('#p1');
    let player2 = document.querySelector('#p2');
    player1.setAttribute('src', "images/dice" + randomNumber1 + ".png");
    player2.setAttribute('src', "images/dice" + randomNumber2 + ".png");
    if (randomNumber1 > randomNumber2) {
        document.querySelector('#result').innerHTML = (`${name1} has won`);
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector('#result').innerHTML = (`it's a DRAW; play again`);

    } else {
        document.querySelector('#result').innerHTML = (`${name2} has won`);
    };
    // text animation
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml2 .letter',
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70 * i
        }).add({
            targets: '.ml2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

}


function displayName1() {
    // get value from input box1
    name1 = document.querySelector('#person1').value;

    // update the with the value on Label1
    document.querySelector('#lb1').innerHTML = name1
        // make input box disappear
    document.querySelector('#person1').style.display = 'none';

}

function displayName2() {
    // get value from input box2
    name2 = document.querySelector('#person2').value;

    // update the with the value on Label2
    document.querySelector('#lb2').innerHTML = name2
        // make input box disappear
    document.querySelector('#person2').style.display = 'none';

}
// run displayName1 on enter key
document.getElementById('person1').addEventListener("keydown", function(e) {
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        displayName1();
    }
});
// run displayName2 on enter key
document.getElementById('person2').addEventListener("keydown", function(e) {
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        displayName2();
    }
});