var speechRec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
speechRec.onResult = showResult; // bind callback function to trigger when speech is recognized
speechRec.start(true, false); // start listening
function showResult()
{
    const p = document.createElement('p');
    p.textContent = speechRec.resultString;
    document.querySelector('main').appendChild(p);
    console.log(speechRec);
}