let screen2Loaded = false;
let scrollObj = {
  onload: function () {
    let element = document.querySelector('.scroll-horizontal-container')
    element.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        window.requestAnimationFrame(() => {
          element.scrollLeft += e.deltaY;
        })
        // var value = element.scrollLeft;
        // var sWidth = $(".screen:first").width()/2;
        var maxWidth = $(".screen:first").width() * 2;
        // console.log(element.scrollLeft);
        // console.log(sWidth);
        // if(value >= sWidth && value <= maxWidth) {
        //   if(!screen2Loaded) {
        //     animatePage1.showAnimation();
        //     screen2Loaded = true;
        //   } 
        // } else {
        //   screen2Loaded = false;
        // }
        if (element.scrollLeft >= $('#section2').position().left && element.scrollLeft < maxWidth) {
          console.log('I have been reached');
          if (!screen2Loaded) {
            animatePage1.showAnimation();
            screen2Loaded = true;
          }
        } else {
          screen2Loaded = false;
        }
      }
    })
  }
}

let audioObj = {
  onload: function () {
    let audio = document.getElementById("myaudio");
    audio.volume = 0.1;
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

let animatePage1 = {
  oninit: function () {

    /* inspired by http://bit.ly/2wzyTlx  */
    /* time out for whatever ainmations */
    setTimeout(function () {
      $(".top,.bottom").animate({ opacity: "1" }, 500);
      Splitting();
    }, 500);

    /* fade in everything */
    $(".background").delay(0).fadeIn(1000);
    $(".typewrite").delay(500).fadeIn(1000);
    $(".bar").delay(500).animate({ marginTop: "-2px", opacity: "1" }, 500);
    $(".background").animate({ height: "410px", width: "450px", opacity: "1" }, 500);
    $("h1,h4").delay(1000).animate({ marginTop: "5px", opacity: "1" }, 500);
  },
  hideDiv: function () {
    $(".bar").delay(0).animate({ marginTop: "-50px", opacity: "0" }, 100);
    $(".background").animate({ height: "0px", width: "0px", opacity: "0" }, 500);
    $(".typewrite").animate({ opacity: "0" }, 500);
    $("h1,h4, .top,.bottom").animate({ opacity: "0" }, 500);
    $(".bar").delay(2000).animate({ marginTop: "-1px", opacity: "1" }, 500);
    $(".background").delay(1000).animate({ height: "410px", width: "450px", opacity: "1" }, 500);
    $(".typewrite, h1,h4").animate({ opacity: "1" }, 2000);
    $(".top,.bottom").delay(1400).animate({ opacity: "1" }, 500);
  },
  showAnimation: function () {

    setTimeout(function () {
      Splitting();
    }, 500);
  },
  onload: function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { font-family: 'Dekko'; color:#806787; border-right: 0.01em solid #000;}";
    document.body.appendChild(css);
    animatePage1.hideDiv();
  }
}

/* typewriter effect for nevermind */
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};