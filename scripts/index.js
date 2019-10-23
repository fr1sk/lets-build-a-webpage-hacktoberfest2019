
document.addEventListener("DOMContentLoaded", function() {

  document.onkeydown = checkKey;
});

const checkKey = (e) => {
  e = e || window.event;
  if (e.keyCode == '82') {
    alert('Open console to see the magic 🌈');
    rainbow();
  }
}

  /*
      _.-""""`-._ 
    ,' _-""""`-_ `.
    / ,'.-'"""`-.`. \
  | / / ,'"""`. \ \ |
  | | | | ,'"`. | | | |
  | | | | |   | | | | |

  RAINBOW EASTER LOG 
  */

 const rainbow = () => {
  let x = 1;
  let up = !1;
  setInterval(() => {
    (75 === x || 1 === x) && (up = !up), up ? x++ : x--, console.log(`%c${`■`.repeat(x)}`, `color: hsl(${2*x}, 100%, 50%)`)
  }, 15);
};

// MATRIX
const matrixRender = () => {
  $('.matrix-canvas').css('display', 'block');
  window.scrollBy(1000, 1000);
} 
// Initialising the canvas
const canvas = document.querySelector('canvas'),
  ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

  // Setting up the letters
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  letters = letters.split('');

  // Setting up the columns
  var fontSize = 10,
    columns = canvas.width / fontSize;

  // Setting up the drops
  var drops = [];
  for (var i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw, 33);


