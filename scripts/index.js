
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

