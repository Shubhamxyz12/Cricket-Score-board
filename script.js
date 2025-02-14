let zero = document.getElementById('0');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let wicketbtn = document.getElementById('wikt');
let run = document.getElementById('run');
let wicket = document.getElementById('wicket');
let ball = document.getElementById('ball');
let over = document.getElementById('ovr');


let run_count = 0;
let wicket_count = 0;
let over_count = 0;
let ball_count = 0;

zero.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
});

one.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count++;
    run.textContent = run_count;
});

two.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count += 2;
    run.textContent = run_count;
});

three.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count += 3;
    run.textContent = run_count;
});

four.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count += 4;
    run.textContent = run_count;
});

five.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count += 5;
    run.textContent = run_count;
});

six.addEventListener('click', () =>{

    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
    run_count += 6;
    run.textContent = run_count;
});

wicketbtn.addEventListener('click', () =>{
    wicket_count++;
    wicket.textContent = wicket_count;

    if(wicket_count == 10){
        alert("Game Completed");
    }
    if(ball_count == 5){
        ball_count = -1;
        over_count++;
        over.textContent = over_count;
        ball.textContent = ball_count;
    }

    ball_count++;
    ball.textContent = ball_count;
})
