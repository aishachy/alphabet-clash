function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        console.log('you have pressed correctly', expectedAlphabet);

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

       
        ////current score
        //const currentScoreElement = document.getElementById('current-score');
        //const currentScoreText = currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //console.log(currentScore); 
        
        //
        ////increase the score by 1
        //const newScore = currentScore + 1;
//
        ////show the updated score
        //currentScoreElement.innerText = newScore;
//
        ////start a new round
//

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed and you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        //get the current life number
        //const currentLifeElement = document.getElementById('current-life');
        //const currentLifeText = currentLifeElement.innerText;
        //const currentLife = parseInt(currentLifeText);
        //console.log(currentLife);

        //
        ////reduce the life count
        //const newLife = currentLife - 1;
//
        ////display the updated score
        //currentLifeElement.innerText = newLife;

    }
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);


function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function play(){
    //hide everything and show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
 
    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //1.get the final score
    const gameScore = getTextElementValueById('current-score');
    console.log(gameScore);
    setTextElementValueById('game-score', gameScore);

    //clear the last selected alphabet
    const currentAlphabet = getTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}



