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
const projectElement = document.querySelector('.projects-title');
const contactElement = document.querySelector('.contact-title');

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
  fadeInOnScroll(aboutMeElement, 0)
});
window.addEventListener('scroll', ()=>{
  fadeInOnScroll(projectElement, 0)
});
window.addEventListener('scroll', ()=>{
  fadeInOnScroll(contactElement, 0)
});



const contactCard = document.querySelector('.contact-card');
const form = document.querySelector('#contactForm');
form.addEventListener('submit', (event) => {
  form.reset();
  if (contactCard.lastChild.tagName === 'P'){
    contactCard.lastChild.remove();
  }
  event.preventDefault();
  const message = document.createElement('p');
  message.classList.add("notificationMessage")
  message.innerText = 'Email successfully sent! Thank you.';
  contactCard.append(message);
  window.scrollBy(0, 150);
});



// particals floating for background
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#fca100" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.28409315098761817,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 112.2388442605866,
      color: "#fca100",
      opacity: 0.10422178395625899,
      width: 2.5654592973848365
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 284.2108682236011, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
