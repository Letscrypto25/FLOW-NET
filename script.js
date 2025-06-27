// Set a fixed light, tech-friendly background image
const backgroundImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80';
// Source: Unsplash – light, warm dev workspace

function setBackground() {
  const body = document.body;

  // Apply background image directly
  body.style.backgroundImage = `url('${backgroundImage}')`;
  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundAttachment = 'fixed';
}

// Apply on page load
window.addEventListener('DOMContentLoaded', setBackground);
