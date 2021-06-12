var scrollObj = {
  onload: function () {
    let element = document.querySelector('.scroll-horizontal-container')
    element.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        window.requestAnimationFrame(() => {
          element.scrollLeft += e.deltaY
        })
      }
    })
  }
}

var audioObj = {
  onload: function () {
    this.fadeIn("myaudio");
  },
  fadeIn: function (audiosnippetId) {

      var sound = document.getElementById(audiosnippetId);

      // Set the point in playback that fadeout begins. This is for a 2 second fade out.
      var fadePoint = sound.duration - 2;

      var fadeAudio = setInterval(function () {

        // Only fade if past the fade out point or not at zero already
        if ((sound.currentTime >= fadePoint) && (sound.volume != 0.0)) {
          sound.volume -= 0.1;
        }
        // When volume at zero stop all the intervalling
        if (sound.volume === 0.0) {
          clearInterval(fadeAudio);
        }
      }, 200);
    }
}

