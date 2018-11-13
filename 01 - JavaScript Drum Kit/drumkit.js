//Play a sound when an appropriate key is pressed
  function playSound(e) {
    //Set both the audio and key to the keyCode that was hit;
    const audio = document.querySelector(` audio[data-key="${e.keyCode}"]`);
    const key = document. querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // if the key wasn't mapped to a sound, let's break out of here.
    if(!audio) {
      return;
    }

    //if we got here, it is a legit sound mapped keystroke.
    audio.currentTime = 0; //rewinds the audio to the start in case already playing 
    audio.play(); //play the sound
    key.classList.add('playing');  
  }

  //when a key in our 'keys' is pressed, at the end of the transition, we remove the class 'playing'
  function removeTransition(e) {
    if(e.propertyName !== 'transform') {
      return;
    }
    this.classList.remove('playing');

  }
  
  //enumerate the keys so we can set transformations on them
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);