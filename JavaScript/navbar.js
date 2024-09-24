// JavaScript to handle the hamburger menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', function() {

      navLinks.classList.toggle('active'); // Toggle the active class on the nav links
      hamburger.classList.toggle('active'); // Toggle the active classon the hamburger
      console.log('Hamburger clicked');
    });
  });