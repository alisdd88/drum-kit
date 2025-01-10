// 🥁

var numOfDrums = document.querySelectorAll('button').length

for(let i=0; i<numOfDrums; i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){
        var audio = new Audio(`assets/sounds/${this.dataset.music}.mp3`);
        audio.play();
        buttonAnimation(this);
    });
}

addEventListener('keydown', (event)=> {
    var key = document.getElementById(event.key)
    if(key != null){
        var audio = new Audio(`assets/sounds/${key.dataset.music}.mp3`);
        audio.play();
        buttonAnimation(key);
    }
})

function buttonAnimation(btn){
    btn.classList.add('pressed')
    setTimeout(() => {
        btn.classList.remove('pressed')
      }, 100); // 2000 milliseconds = 2 seconds
}


