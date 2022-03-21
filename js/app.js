const btnIDs = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 
'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5',
 'e1', 'e2', 'e3', 'e4', 'e5', 'f1', 'f2', 'f3', 'f4', 'f5', 
 'g1', 'g2', 'g3', 'g4', 'g5', 'h1', 'h2', 'h3', 'h4', 'h5',
 'i1', 'i2', 'i3', 'i4', 'i5', 'j1', 'j2', 'j3', 'j4', 'j5'];

const btnNames = btnIDs.map(function(el) {
    return el.toLocaleUpperCase();
})

const enemyButtonsIDs = [];
addHalfArray(btnIDs, enemyButtonsIDs, 0, (btnIDs.length / 2));
const enemyButtonsNames = [];
addHalfArray(btnNames, enemyButtonsNames, 0, (btnIDs.length / 2));
const playerButtonsIDs = [];
addHalfArray(btnIDs, playerButtonsIDs, (btnIDs.length / 2), btnIDs.length);
const playerButtonsNames = [];
addHalfArray(btnNames, playerButtonsNames, (btnIDs.length / 2), btnIDs.length);
let phase = 0;

enableDisableAllButtons(false);
const confirm = document.querySelector('#confirm');
confirm.addEventListener('click', function() {
    //enableDisablePlayerButtons(false);
    const how = document.querySelector('.how');
    how.innerText = '';
    const info = document.querySelector('.info');
    info.innerText = 'Please choose a slot to place boat on your side of the map.';
    const start = document.querySelector('.start');
    start.innerText = 'Are you ready to start playing?';
    let begin = document.querySelector('#confirm');
    begin.parentNode.removeChild(begin);
    phase = 1;
    if(phase === 1){
        let plyBtn = document.querySelectorAll('.playerBtn');
        plyBtn.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                if (e.target.classList.contains('playerPiece') || (phase >= 6)) {
                    return;
                }
                
                else {
                    e.target.classList.add('playerPiece');
                    console.log('CLICKKKKKKK')
                    phase++;   
                }
                if (phase === 6) {
                    const play = document.createElement('button');
                    play.id = 'startGame';
                    play.innerHTML = 'LETS GOOOOO';
                    const lastDiv = document.querySelector('.start');
                    lastDiv.appendChild(play);
                    phase = 7;
                    //play = document.querySelector('#startGame');
                    play.addEventListener('click', function() {
                        play.parentNode.removeChild(play);
                        start.innerText = 'Let the Game Begin!!!';
                        let turn = 0;
                        if(phase === 7) {
                            console.log('let the game begin!!!');
                                //if(turn % 2 === 0) {
                                    let enemyField = document.querySelectorAll('.enemyBtn');
                                    enemyField.forEach(function(btn) {
                                        btn.addEventListener('click', function(event) {
                                            if (event.target.classList.contains('enemyPiece') || (turn >= 25)) {
                                                return;
                                            }
                                            
                                            else {
                                                event.target.classList.add('enemyPiece');
                                                console.log('you clicked on the enemy side');
                                                console.log(turn);
                                                checkPlayerSide();

                                                //console.log(randomAnswer);
                                                turn++; 

                                            }
                                        }, {once: true});
                                    })
                                    console.log('player turn');
                                    //turn++;
                                //}
                        }
                        return;
                    })
                }
            }, {once: true});
        })
    }
    
});

function enableDisableAllButtons(bool) {
    btnIDs.forEach(function(item) {
        document.getElementById(item).disabled = bool;
    });
};

function enableDisablePlayerButtons(bool) {
    playerButtonsIDs.forEach(function(item) {
        document.getElementById(item).disabled = bool;
    });
};

function enableDisableEnemyButtons(bool) {
    enemyButtonsIDs.forEach(function(item) {
        document.getElementById(item).disabled = bool;
    });
};

function addHalfArray(oldArray, newArray, startPoint, endPoint) {
    for (let i = startPoint; i < endPoint; i++) {
        newArray.push(oldArray[i]);
    };
};




function checkPlayerSide() {
    let randomChoice = playerButtonsIDs[Math.floor(Math.random()*playerButtonsIDs.length)];
    let randomComputerChoice = document.querySelector(`#${randomChoice}`);
    if(randomComputerChoice.classList.contains('shot')) {
        checkPlayerSide();
    }
    else if(randomComputerChoice.classList.contains('playerPiece')) {
        console.log('Computer hit a boat!! It goes again!');
        randomComputerChoice.classList.add('shot');
        checkPlayerSide();
    }
    else {
        randomComputerChoice.classList.add('shot');
    }
}