// function play(){
//     // hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList);

//     // show the playground

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function continueGame(){
    // generate a random number alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen(display)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set backround color
    setBackgroundColorById(alphabet);


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}