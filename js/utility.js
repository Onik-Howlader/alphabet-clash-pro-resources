function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setElementByBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function getRandomAlphabet(){
    //get or create random alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvqxyz';
    const alphabets = alphabetString.split('');
    //get a random number
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;
}


