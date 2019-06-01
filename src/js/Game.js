// Global Vars
const DEFAULT_TIME = 25;
const DEFAULT_SCORE = 0;
var time = 25; // Segundos
var score = 0;

var target;
var timer ;

function showGamePage(){
    $('#game-container').css("display", "flex");
    $('#gameOver').css("display", "none");
    $('#score').text(DEFAULT_SCORE);
    $('#time').text(DEFAULT_TIME);
}

function showGameOverPage(){
    clearInterval(timer);
    $('#game-container').css("display", "none");
    $('#gameOver').css("display", "flex");
    $('#final-score').text("Pontuação Final: " + score);
}


function position(object) {
    // Constantes de tamanho de tela
    const SCREEN_WIDTH = $('#game').width();
    const SCREEN_HEIGHT = $('#game').height();

    let leftPos = (Math.round((Math.random() * (SCREEN_WIDTH - 100)) / 50) * 50) + 50;
    let topPos = (Math.round((Math.random() * (SCREEN_HEIGHT - 50)) / 50) * 50);
    $(object).animate({
        left: leftPos,
        top: topPos
    }, 100)
}

$('#target').click(function () {
    if (!time - 1 < 0) {
        position($('#target'));
        score++;
        $('#score').text(score);

        var audio = document.getElementById("audio");
        audio.play();
    }
});

$('#restart').click(function () {
    showGamePage();
    StartGame();
});

function StartGame() {
    time = DEFAULT_TIME;
    score = DEFAULT_SCORE;

    target = document.getElementById('target');
    position(target);
    $(target).show();

    timer = setInterval(function () {
        time--;
        if ((time - 1) < 0) {
            showGameOverPage();
        } else {
            $('#time').text(time);
        }
    }, 1000);
}

StartGame();