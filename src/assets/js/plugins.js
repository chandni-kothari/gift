let scrollObj = {
  onload: function () {
    let element = document.querySelector('.scroll-horizontal-container')
    element.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        window.requestAnimationFrame(() => {
          element.scrollLeft += e.deltaY;
        })
      }
    })
  }
}

let audioObj = {
  onload: function () {
    let audio = document.getElementById("myaudio");
    audio.volume = 0.1;
  }
}

let animatePage1 = {
  oninit: function () {
    /* time out for whatever ainmations */
    setTimeout(function () {
      Splitting();
    }, 500);

    /* fade in everything */
    $(".background").delay(0).fadeIn(500);
    $(".typewrite").delay(0).fadeIn(500);
    $(".bar").delay(0).animate({ marginTop: "-2px", opacity: "1" }, 500);
    $(".background").animate({ height: "100%", width: "100%", opacity: "1" }, 500);
    $("h1,h4").delay(0).animate({ marginTop: "5px", opacity: "1" }, 500);
  },
  hideDiv: function () {
    $(".bar").delay(0).animate({ marginTop: "-50px", opacity: "0" }, 100);
    $(".background").animate({ height: "0px", width: "0px", opacity: "0" }, 500);
    $(".typewrite").animate({ opacity: "0" }, 500);
    $("h1,h4, .top,.bottom").animate({ opacity: "0" }, 500);
    $(".bar").delay(0).animate({ marginTop: "-1px", opacity: "1" }, 500);
    $(".background").delay(1000).animate({ height: "100%", width: "100%", opacity: "1" }, 500);
    $(".typewrite, h1,h4").animate({ opacity: "1" }, 2000);
  },
  showAnimation: function () {
    setTimeout(function () {
      Splitting();
    }, 1500);
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
  }
}

/* typewriter effect */
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