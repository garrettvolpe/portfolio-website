// Select the body element
const body = document.querySelector('body');

// Add a scroll event listener to the window object
window.addEventListener('scroll', function() {
  // If the page has been scrolled, add the "scrolled" class to the body element
  if (window.scrollY > 50) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});



function angle (cx,cy,ex,ey){
  const dy = ey - cy
  const dx = ex - cx;
  const rad = Math.atan2(dy,dx) 
  const deg = rad * 180 / Math.PI
  return deg
};

document.addEventListener('mousemove', (e)=>{
  const mouseX = e.clientX
  const mouseY = e.clientY
  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width /2;
  const anchorY = rekt.top + rekt.height /2;
  const atan2 = (anchorX, anchorY);
  const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
  console.log(angleDeg)
  
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
      eye.style.transform = `rotate(${angleDeg + 90}deg)`
  });
});
