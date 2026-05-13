// function play(){
//     const homeSection = document.getElementById('homePart');
//     homeSection.classList.add('hidden') 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

function handleKeyboarKeyUpEvent(event){
    const playerPressed = event.key
    console.log('player pressed: ', playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver()
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphebet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed, expectedAlphabet)
    //check matched or not
    if(playerPressed === expectedAlphabet){
        //update score:
        //1. get the current score:
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //updated value:
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        console.log(newScore)
        //started new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();        
    }
    else{
        console.log('missed')
        const reduceLifeTime = document.getElementById('reduce-life');
        const reduceLifeText = reduceLifeTime.innerText;
        const reduceLife = parseInt(reduceLifeText);
        const newLife = reduceLife - 1;
        reduceLifeTime.innerText = newLife;
        console.log(newLife);
        if(newLife === 0){
            gameOver();
        }
    }
}
//press a button
document.addEventListener('keyup', handleKeyboarKeyUpEvent)

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your alphebet is: ', alphabet);
    const currentAlphebetElement = document.getElementById('current-alphebet');
    currentAlphebetElement.innerText = alphabet;
    setElementByBackgroundColor(alphabet)
}

function play(){
    //hide everything only show playground
    hideElementById('homePart');
    hideElementById('final-score')
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('reduce-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    //update final score
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore)
    setTextElementValueById('game-score', lastScore)

    //clear alphabet last highlight value
    const currentAlphabet = getElementTextById('current-alphebet');
    removeBackgroundColorById(currentAlphabet);
}
