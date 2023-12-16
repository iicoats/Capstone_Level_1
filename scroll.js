"use strict"


      function scrollleft() {
        document.getElementById("scrolling-text").style.left = '100%';
        setTimeout(scrollleft, 25);
      }
      scrollleft();
 