function PressKey(event){

    const presskey = event.key;
    const crrntkey =  document.getElementById('new-alph').innerText.toLowerCase();
    console.log(presskey, crrntkey);
    if( presskey === crrntkey)
    {
      
        const crrntscore = getValue('crrnt-score');
        const newscore = crrntscore + 1;
        document.getElementById('crrnt-score').innerText = newscore;
        game();
        removeBg(crrntkey);
    }
    else
    {
        const crrntlife = getValue('crrnt-life');
        const newlife = crrntlife - 1;
        document.getElementById('crrnt-life').innerText = newlife;
        if(newlife === 0 )
        {
            gameover();
        }
    }


}
document.addEventListener('keyup',PressKey)

function game(){
    const alphabhet =  getRandomAlpha();
    document.getElementById('new-alph').innerText = alphabhet;
    addBg(alphabhet);
}

function play(){
    //hide home
    hideId('home');
    hideId('score')
    // show play
    showId('play');
    // reset value
    document.getElementById('crrnt-score').innerText = 0;
    document.getElementById('crrnt-life').innerText = 7;
    game();
}
function gameover(){
    hideId('play');
    showId('score');
    const final = getValue('crrnt-score');
    document.getElementById('new-score').innerText = final;
    const crrntalpha = getText('new-alph');
    removeBg(crrntalpha);

}