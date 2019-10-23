
document.addEventListener("DOMContentLoaded", function () {

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
    (75 === x || 1 === x) && (up = !up), up ? x++ : x-- , console.log(`%c${`■`.repeat(x)}`, `color: hsl(${2 * x}, 100%, 50%)`)
  }, 15);
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Adding digital watch at the top right corner. It bigins from below line ----
const date = new Date();
const digital_clock = document.querySelector('.clock')
const tick = () => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const createClockHtml = `
  <span>${hour}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span> 
  `
  digital_clock.innerHTML = createClockHtml;
}
setInterval(tick, 1000);
// digital watch code ends at this line ------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
