const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to cover the entire viewport and position it
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;
canvas.style.width = window.innerWidth + 'px';
canvas.style.height = window.innerHeight + 'px';
ctx.scale(2, 2); // Scale up canvas context to match doubled canvas size

function createCircle(event) {
  const size = Math.random() * 300 + 50; // Random size between 50 and 150 pixels
  const x = Math.random() * (window.innerWidth * 2 - size); // Random x position within the doubled canvas width
  const y = Math.random() * (window.innerHeight * 2 - size); // Random y position within the doubled canvas height

  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = '#80AB39';
  ctx.fill();
}

document.addEventListener('click', createCircle);