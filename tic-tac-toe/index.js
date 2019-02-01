function startGame() {
    document.turn="X";
    setMessage(document.turn+" gets to start")
}

function setMessage(msg){
    document.getElementById('message').innerHTML=msg;
}

function nextMove(sq) {
    sq.innerHTML=document.turn;
    switchMove();
}
function switchMove(params) {
    if (document.turn=='X') {
        document.turn='O';
    } else {
        document.turn='X';
    }
    setMessage("its "+document.turn+"'s turn")
}
