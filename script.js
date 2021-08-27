// burger
var toggled = 0;
var openWindow = new Audio('audio/open.mp3');
var closeWindow = new Audio('audio/close.mp3');

$(document).ready(function () {

  // document.getElementById("baraban").addEventListener("mouseover", mouseBaraban);
  // document.getElementById("piano").addEventListener("mouseover", mousePiano);
  // document.getElementById("guitar").addEventListener("mouseover", mouseGuitar);

  $('.artclose').click(function () {
    if (toggled == 0) {
      // openWindow.play();
      $('.burgx3').stop().transition({ rotate: "45", "margin-top": "13px" });
      $('.burgx2').stop().transition({ opacity: "0" }, "fast");
      $('.burgx').stop().transition({ rotate: "-45", "margin-top": "13px" });
      toggled++;
      $(".site-wrap").addClass("trasform-scale");
      $(".zoom").removeClass("d-none").addClass("d-inferit");
    }
    else {
      // closeWindow.play();
      $(".site-wrap").removeClass("trasform-scale");
      $('.burgx3').stop().transition({ "transform": "inherit", "margin-top": "3px" });
      $('.burgx2').transition({ opacity: "1" }, "fast");
      $('.burgx').stop().transition({ "transform": "inherit", "margin-top": "23px" });
      $(".zoom").removeClass("d-inferit").addClass("d-none");
      toggled--;
    }
  });
  $('.zoom .panel__nav').click(function () {
    // closeWindow.play();
    $(".site-wrap").removeClass("trasform-scale");
    $('.burgx3').stop().transition({ "transform": "inherit", "margin-top": "3px" });
    $('.burgx2').transition({ opacity: "1" }, "fast");
    $('.burgx').stop().transition({ "transform": "inherit", "margin-top": "23px" });
    $(".zoom").removeClass("d-inferit").addClass("d-none");
    toggled--;
  });
});


var win = window,
  doc = document;

function hasClass(el, cls) {
  return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};

function addClass(el, cls) {
  if (!this.hasClass(el, cls)) {
    el.className += " " + cls;
  }
};

function removeClass(el, cls) {
  if (this.hasClass(el, cls)) {

    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
};

var site = doc.querySelectorAll('.site-wrap')[0],
  wrap = doc.querySelectorAll('.panel-wrap')[0],
  zoom = doc.querySelectorAll('.zoom-block')[0],
  panel = doc.querySelectorAll('.panel'),
  nav_up = doc.querySelectorAll('.js-up'),
  nav_left = doc.querySelectorAll('.js-left'),
  nav_right = doc.querySelectorAll('.js-right'),
  nav_down = doc.querySelectorAll('.js-down'),
  animation = doc.querySelectorAll('.js-animation'),
  pos_x = 0,
  pos_y = 0;

function setPos() {
  if (pos_x > 1 || pos_y > 1 || pos_x < -1 || pos_y < -1) {
  } else {
    wrap.style.transform = 'translateX(' + pos_x + '00%) translateY(' + pos_y + '00%)';
  }


  setTimeout(function () {
    removeClass(wrap, 'animate event-craft');
  }, 800);
}

setPos();

function moveUp() {
  // openWindow.play();
  addClass(wrap, 'animate event-craft');
  if (pos_y != 1) {
    pos_y++;
  }
  setPos();
}

function moveLeft() {
  // openWindow.play();
  addClass(wrap, 'animate event-craft');
  if (pos_x != 1) {
    pos_x++;
  }
  setPos();
}

function moveRight() {
  // openWindow.play();
  addClass(wrap, 'animate event-craft');
  if (pos_x != -1) {
    pos_x--;
  }

  setPos();
}

function moveDown() {
  // openWindow.play();
  addClass(wrap, 'animate--scale event-craft');

  if (pos_y != -1) {
    pos_y--;
  }
  setPos();
}

for (var x = 0; x < nav_up.length; x++) {
  nav_up[x].addEventListener('click', moveUp);
}

for (var x = 0; x < nav_left.length; x++) {
  nav_left[x].addEventListener('click', moveLeft);
}

for (var x = 0; x < nav_right.length; x++) {
  nav_right[x].addEventListener('click', moveRight);
}

for (var x = 0; x < nav_down.length; x++) {
  nav_down[x].addEventListener('click', moveDown);

}







