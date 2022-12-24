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
