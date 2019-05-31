// Timer
setInterval(function () {
    if ((parseInt(($('#time').text()) - 1) < 0)) {
        $('#game-container').animate({
            opacity: 0.2
        }, 700);
        $('#gameOver').animate({
            opacity: 1
        }, 1000);
        $('#gameOver').animate({
            opacity: 1
        }, 1000);
        $('#formScore').val($('#score').text())
    } else {
        $('#time').text(parseInt($('#time').text()) - 1)
    }
}, 1000);
// Counts down timer and checks for lose
function position(object) {
    // Constantes de tamanho de tela
    const SCREEN_WIDTH = $('#game').width();
    const SCREEN_HEIGHT = $('#game').height();

    let leftPos = (Math.round((Math.random() * (SCREEN_WIDTH - 100)) / 50) * 50) + 50;
    let topPos = (Math.round((Math.random() * (SCREEN_HEIGHT - 50)) / 50) * 50);

    while (topPos < 0) {
        break;
    }
    $(object).animate({
        left: leftPos,
        top: topPos
    }, 100)
}
//Declares function which sets random position of given object.  
position(document.getElementById('target'));
$('#target').click(function () {
    if (!(parseInt(($('#time').text()) - 1) < 0)) {
        position($('#target'));
        $('#score').text(parseInt($('#score').text()) + 1)
    }
})