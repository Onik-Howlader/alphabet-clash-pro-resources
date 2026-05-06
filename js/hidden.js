// function play(){
//     const homeSection = document.getElementById('homePart');
//     homeSection.classList.add('hidden') 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

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
