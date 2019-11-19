
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

var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    buttonOffSets: {
      top: null,
      left: null
    }
  },
  methods: {
    incrementCounter: function() {
      this.counter+=1;
    },
    zero: function(){
      this.counter=0;
    },
    moveButton: function(e) {
      this.buttonOffSets = {
        top: `${Math.random() * window.innerHeight}px`,
        left: `${Math.random() * window.innerWidth}px`
      }
    }
  }

})
