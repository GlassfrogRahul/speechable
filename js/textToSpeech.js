var p5Speech = new p5.Speech(); // speech synthesis object
p5Speech.setRate(0.15);
p5Speech.setLang('en-IN');
// p5Speech.speak('hi there'); // say something
function speak() {
    const text = document.getElementById('ip').value;
    p5Speech.speak(text);
}

p5Speech.onStart = function() {
    console.log('start')
}