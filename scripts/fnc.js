function hideId(element)
{
    const hide = document.getElementById(element).classList.add('hidden');
}
function showId(element){
    const  show = document.getElementById(element).classList.remove('hidden');
}
function addBg(element){
  const BgChange = document.getElementById(element).classList.add('bg-orange-400');
}
function removeBg(element){
  const BgChange = document.getElementById(element).classList.remove('bg-orange-400');
}
function getValue(event){
    const value = parseInt(document.getElementById(event).innerText);
    return value;

}

function getText(event){
    const text = document.getElementById(event).innerText;
    return text;
}

function getRandomAlpha(){
    const alphaStrings = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabhets = alphaStrings.split('');
    const index = Math.round(Math.random()*25);
    const letter = alphabhets[index];
    console.log(letter);
    return letter;
}