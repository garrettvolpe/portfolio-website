const anchor = document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width /2;
const anchorY = rekt.top + rekt.height /2;


const pageHeight = window.innerHeight;
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
  if(mouseY > 810){
    console.log("now")
  }
  const atan2 = (anchorX, anchorY);
  const angleDeg = angle(mouseX,mouseY,anchorX,anchorY)
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
      eye.style.transform = `rotate(${angleDeg + 45}deg)`
  });
});


const navbarElement = document.querySelector('.navbar');
const aboutMeElement = document.querySelector('.about-me-title');
const projectElement = document.querySelector('.projects');
const contactElement = document.querySelector('.contact-me');

function fadeInOnScroll(element, fadeStart) {
  // Get the position of the about-me element
  const postion = element.getBoundingClientRect();

  // Check if the about-me element is in view
  if (postion.top >= 0 && postion.bottom <= window.innerHeight + (window.innerHeight * fadeStart)) {
    // If the about-me element is in view, add the fade-in class
      element.classList.add('fade-in');
  }
}

// Add a scroll event listener to fade in the about-me element when it is in view
window.addEventListener('scroll', ()=>{
  fadeInOnScroll(aboutMeElement, 0 )
});
window.addEventListener('scroll', ()=>{
  fadeInOnScroll(projectElement, .9)
});
window.addEventListener('scroll', ()=>{
  fadeInOnScroll(contactElement, .4)
});



const contactCard = document.querySelector('.contact-card');
const form = document.querySelector('#contactForm');
form.addEventListener('submit', (event) => {
  form.reset();
  event.preventDefault();
  const message = document.createElement('p');
  message.classList.add("notificationMessage")
  message.innerText = 'Email successfully sent! Thank you.';
  contactCard.append(message);
  window.scrollBy(0, 100);
});