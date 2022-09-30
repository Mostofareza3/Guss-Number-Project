'use strict';


// document.querySelector('.message').textContent();
// document.querySelector('.message').textContent = '✔ Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 30;

let secret = Math.trunc(Math.random() * 20) + 1;
console.log(secret)
let score = 20;
let highScore = 0;
// console.log(secret);

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secret = Math.trunc(Math.random() * 20) + 1;
})

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(score)
    if (score <= 0) {
        document.querySelector('.message').textContent = '🤦‍♀️ You Lost The Game!';
        return;
    }
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    else if (guess === secret) {
        document.querySelector('.message').textContent = '✔ Correct Number!';

        document.querySelector('.number').textContent = secret;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess > secret) {

        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;


    }
    else if (guess < secret) {
        document.querySelector('.message').textContent = '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }

});

