const anchor = document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width /2;
const anchorY = rekt.top + rekt.height /2;

const body = document.querySelector('body');

// fade cat out when scrolled.
window.addEventListener('scroll', function() {
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

// Event listener for cats eyes to follow mouse.
document.addEventListener('mousemove', (e)=>{
  const mouseX = e.clientX
  const mouseY = e.clientY
  const atan2 = (anchorX, anchorY);
  const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
      eye.style.transform = `rotate(${angleDeg + 45}deg)`
  });
});
