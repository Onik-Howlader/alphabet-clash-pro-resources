// function play(){
//     const homeSection = document.getElementById('homePart');
//     homeSection.classList.add('hidden') 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

function handleKeyboarKeyUpEvent(event){
    const playerPressed = event.key
    console.log('player pressed: ', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphebet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase()
    console.log(playerPressed, expectedAlphabet)
    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('missed')
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
    hideElementById('homePart');
    showElementById('play-ground');
    continueGame();
}
