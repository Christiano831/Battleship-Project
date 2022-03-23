const btnIDs = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 
'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10',
 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 
 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10',
 'i1', 'i2', 'i3', 'i4', 'i5', 'i6', 'i7', 'i8', 'i9', 'i10', 'j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10',
 'k1', 'k2', 'k3', 'k4', 'k5', 'k6', 'k7', 'k8', 'k9', 'k10', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 
 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm9', 'm10', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10',
 'o1', 'o2', 'o3', 'o4', 'o5', 'o6', 'o7', 'o8', 'o9', 'o10', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 
 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10',
 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 't1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10' ];

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
                if (e.target.classList.contains('playerPiece') || (phase >= 18)) {
                    return;
                }
                
                else {
                    e.target.classList.add('playerPiece');
                    // console.log('CLICKKKKKKK')
                    phase++;   
                }
                if (phase === 18) {
                    const play = document.createElement('button');
                    play.id = 'startGame';
                    play.innerHTML = 'LETS GOOOOO';
                    const lastDiv = document.querySelector('.start');
                    lastDiv.appendChild(play);
                    phase = 19;
                    //play = document.querySelector('#startGame');
                    play.addEventListener('click', function() {
                        enemyBoatGenerator();
                        play.parentNode.removeChild(play);
                        start.innerText = 'Let the Game Begin!!!';
                        let turn = 0;
                        if(phase === 19) {
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
    if (enemyPiecesPlaced === 17) {
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
    if (enemyPiecesLost === 17) {
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
                    if (playerPiecesLost === 17) {
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