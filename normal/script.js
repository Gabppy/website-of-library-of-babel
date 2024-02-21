const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createCircle() {
  const size = Math.random() * 300 + 50; 
  const x = Math.random() * (window.innerWidth - size); // Random x position within the viewport
  const y = Math.random() * (window.innerHeight - size); // Random y position within the viewport

  ctx.beginPath();
  ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
  ctx.fillStyle = '#80AB39';
  ctx.fill();
}



setInterval(createCircle, 1700); // Create a circle every 2000 milliseconds (2 seconds)