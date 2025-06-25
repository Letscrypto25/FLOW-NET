// Array of tech-themed background image URLs (public domain / free images recommended)
const backgrounds = [
  'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1350&q=80',  // circuit board close-up
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1351&q=80',  // code on screen
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1350&q=80',  // blue digital grid
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',  // developer working on laptop
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80'   // abstract tech lights
];

// Function to pick background for current session or new if none stored
function setBackground() {
  let bgIndex = sessionStorage.getItem('bgIndex');

  if (bgIndex === null) {
    bgIndex = Math.floor(Math.random() * backgrounds.length);
    sessionStorage.setItem('bgIndex', bgIndex);
  } else {
    bgIndex = parseInt(bgIndex, 10);
  }

  document.body.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
}

// Run on page load
window.addEventListener('DOMContentLoaded', () => {
  setBackground();
});
