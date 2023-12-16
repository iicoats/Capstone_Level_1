"use strict"

<script>
      function scrollleft() {
        document.getElementById("scrolling-text").style.left = '100%';
        setTimeout(scrollleft, 25);
      }
      scrollleft();
 </script>