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
                    // console.log('CLICKKKKKKK')
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
                        enemyBoatGenerator();
                        play.parentNode.removeChild(play);
                        start.innerText = 'Let the Game Begin!!!';
                        let turn = 0;
                        if(phase === 7) {
                            // console.log('let the game begin!!!');
                                //let enemyField = document.querySelectorAll('.enemyBtn');
                                //enemyField.forEach(function(btn) {
                                    let enemyField = document.querySelectorAll('.enemyBtn');
                                    enemyField.forEach(function(btn) {
                                        btn.addEventListener('click', playerTurn)
                                            //playerTurn();
                                        //}, {once: true});
                                    })

                                    // btn.addEventListener('click', function(event) {
                                    //     if (event.target.classList.contains('shotOnEnemy') || (turn >= 25)) {
                                    //         return;
                                    //     }    
                                    //     else {
                                    //         event.target.classList.add('shotOnEnemy');
                                    //         if (event.target.classList.contains('enemyPiece')) {
                                    //             event.target.classList.add('hitEnemy');
                                    //             let playerPiecesLost = document.getElementsByClassName('hitEnemy').length;
                                    //             // console.log(playerPiecesLost);
                                    //             if (playerPiecesLost === 5) {
                                    //                 info.innerText = 'Nice job! you were able to beat the computer!!';
                                    //                 start.innerText = 'Do you want to play again?';
                                    //                 enableDisableAllButtons(true);
                                    //                 return;
                                    //             }
                                    //         }
                                    //         // console.log('you clicked on the enemy side');
                                    //         // console.log(turn);
                                    //         enemyTurn();
                                    //         turn++; 
                                    //     }
                                    // }, {once: true});
                                //})
                            // console.log('player turn');
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

function enemyBoatGenerator() {
    let randomChoice = enemyButtonsIDs[Math.floor(Math.random()*enemyButtonsIDs.length)];
    let randomComputerChoice = document.querySelector(`#${randomChoice}`);
    let enemyPiecesPlaced = document.getElementsByClassName('enemyPiece').length;
    if (enemyPiecesPlaced === 5) {
        return;
    }
    else if(randomComputerChoice.classList.contains('enemyPiece')) {
        enemyBoatGenerator();
    }
    else {
        randomComputerChoice.classList.add('enemyPiece');
        enemyBoatGenerator();
    }
}



function enemyTurn() {
    let randomChoice = playerButtonsIDs[Math.floor(Math.random()*playerButtonsIDs.length)];
    let randomComputerChoice = document.querySelector(`#${randomChoice}`);
    let enemyPiecesLost = document.getElementsByClassName('hitPlayer').length;
    // console.log(enemyPiecesLost);
    if (enemyPiecesLost === 5) {
        const info = document.querySelector('.info');
        info.innerText = 'Oh well! it seems as though the computer won this time!';
        const start = document.querySelector('.start');
        start.innerText = 'Do you want to play again?';
        enableDisablePlayerButtons(true);
        enableDisableEnemyButtons(true);
        replayButton();
    }
    else if(randomComputerChoice.classList.contains('shot')) {
        console.log('oops computer already hit that tho')
        enemyTurn();
    }
    else if(randomComputerChoice.classList.contains('playerPiece')) {
        //const info = document.querySelector('.info');
        //info.innerText = 'Computer hit a boat and was able to go more than once!'
         console.log('Computer hit a boat!! It goes again!');
        randomComputerChoice.classList.add('shot');
        randomComputerChoice.classList.add('hitPlayer');

//NEED TO REMOVE RANDOM VALUE FROM ARRAY
        // for (let i = 0; i < playerButtonsIDs.length; i++) {
        //     if (playerButtonsIDs[i] === randomChoice) {
        //         playerButtonsIDs.splice(i, 1);
        //     }
        // }

        enemyTurn();
    }
    else {
        randomComputerChoice.classList.add('shot');
        console.log('computer made a move');

//NEED TO REMOVE RANDOM VALUE FROM ARRAY
        // for (let i = 0; i < playerButtonsIDs.length; i++) {
        //     if (playerButtonsIDs[i] === randomChoice) {
        //         playerButtonsIDs.splice(i, 1);
        //     }
        // }

        playerTurn;
        //const info = document.querySelector('.info');
        //info.innerText = 'Computer missed a hit, this is your chance!'
    }
}

function playerTurn(event) {
    // let enemyField = document.querySelectorAll('.enemyBtn');
    // enemyField.forEach(function(btn) {
    //     btn.addEventListener('click', function(event) {
             if (event.target.classList.contains('shotOnEnemy')) {
                 playerTurn;
             }    
             else {
                event.target.classList.add('shotOnEnemy');
                if (event.target.classList.contains('enemyPiece')) {
                    event.target.classList.add('hitEnemy');
                    let playerPiecesLost = document.getElementsByClassName('hitEnemy').length;
                     console.log(playerPiecesLost);
                    if (playerPiecesLost === 5) {
                        const info = document.querySelector('.info');
                        info.innerText = 'Nice job! you were able to beat the computer!!';
                        const start = document.querySelector('.start');
                        start.innerText = 'Do you want to play again?';
                        enableDisablePlayerButtons(true);
                        enableDisableEnemyButtons(true);
                        replayButton();
                        return;
                    }
                    playerTurn;
                }
                else {
                    enemyTurn();
                }
                // console.log('you clicked on the enemy side');
            }
    //     }, {once: true});
    // })
}

function replayButton() {
    const redo = document.createElement('button');
    redo.id = 'redo';
    redo.innerHTML = 'Lets do that again!';
    const lastDiv = document.querySelector('.start');
    lastDiv.appendChild(redo);
    redo.addEventListener('click', function() {
        location.reload(true);
    })
}