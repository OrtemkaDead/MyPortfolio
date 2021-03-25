// Swiper
var wrapper = window;
var elementWidth = document.querySelector('.content').clientWidth;
var i = 0;
const items = document.querySelectorAll(".content");

function scrollTo(e) {
   wrapper.scroll({
      top: e,
      left: 0,
      behavior: 'smooth'
   })
}

var initialPoint;
var finalPoint;
wrapper.addEventListener('touchstart', function (event) {
   initialPoint = event.changedTouches[0];
}, false);
wrapper.addEventListener('touchend', function (event) {
   finalPoint = event.changedTouches[0];
   var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
   var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
   if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
         if (finalPoint.pageX < initialPoint.pageX) {
            /*СВАЙП ВЛЕВО*/
            if (i < items.length - 1) {
               i++;
               scrollTo(elementWidth * i);
            }
         }
         else {
            /*СВАЙП ВПРАВО*/
            if (i == 0) { }
            else {
               i--;
               scrollTo(elementWidth * i);
            }
         }
      }
   }
}, false);