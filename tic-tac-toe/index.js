function startGame() {
    document.turn="X";
    setMessage(document.turn+" gets to start");
    
}

function setMessage(msg){
    document.getElementById('message').innerHTML=msg;
}

function nextMove(sq) {
    if(sq.innerHTML==""){
    sq.innerHTML=document.turn;
    switchMove();
    }else
    {
        setMessage("INVALID");
    }
}
function switchMove(params) {
    if(check(document.turn)){
        window.alert(document.turn+"  WON THE GAME");
        
    }else if (document.turn=='X') {
        document.turn='O';
    } else {
        document.turn='X';
    }
    setMessage("its "+document.turn+"'s turn")
}
// function re(){
//     let cell=document.querySelectorAll("td");
//     for (let i = 0; i< cell.length; i++) {
//         cell.textContent=' ';
//         cell.innerHTML=' ';
//         cell.innerText=' ';       
//     }
    
//     console.log(cell);
// }
// function re(params) {
//     // let cell = document.getElementsByClassName('sq');
//     startGame();
   
//     console.log(cell);
// }
function check(move){
    var res=false;
    if(checkRow(1,2,3,move)||checkRow(4,5,6,move)||checkRow(7,8,9,move)||checkRow(1,4,7,move)||checkRow(2,5,8,move)||checkRow(3,6,9,move)||checkRow(1,5,9,move)||checkRow(3,5,7,move)){
        res=true;
    }
    return res;
}
function checkRow(a,b,c,move) {
    var result = false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move){
        result=true;
    }
    return result;
}

function getBox(num) {
    return document.getElementById('s'+num).innerText;
}

