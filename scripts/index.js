
document.addEventListener("DOMContentLoaded", function() {

  //document.onkeydown = checkKey;
});

const checkKey = (e) => {
  e = e || window.event;
  if (e.keyCode == '82') {
    alert('Open console to see the magic 🌈');
    //rainbow();
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

const corn = () => {

  let daysArray = ["Sunday", "Monday", "Tuesdee", "Wednesday", "Thursday", "Friday", "Saturday"];

  let now = new Date();
  let day = daysArray[ now.getDay() ];
  document.getElementById("js_dayoftheweek").innerText = day;
}

document.addEventListener( "click" ,function(e){
  let verticalPos = e.clientY;
  let horizontalPos = e.clientX;
  let thedaystyle = document.getElementById("js_thatday").style;
  thedaystyle.position = "absolute";
  thedaystyle.top = (verticalPos - 100) + "px";
  thedaystyle.left = (horizontalPos - 80) + "px";
  // document.getElementById("js_thatday").style.position = "absolute";
  // document.getElementById("js_thatday").style.top = verticalPos + "px";
  // document.getElementById("js_thatday").style.left = horizontalPos + "px";

})
corn();