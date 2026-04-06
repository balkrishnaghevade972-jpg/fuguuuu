// Fade-in animation for pages
document.querySelectorAll(".page").forEach(page => {
  page.style.opacity = 0;
});

const observer = new MutationObserver(() => {
  document.querySelectorAll(".page.active").forEach(page => {
    page.style.transition = "opacity 1s";
    page.style.opacity = 1;
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Floating hearts effect 💖
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "20px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 500);

// Add keyframes dynamically
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity:1; }
  100% { transform: translateY(-100vh); opacity:0; }
}

/* Button hover glow */
button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px pink;
  transition: 0.3s;
}

/* Image hover effect */
img:hover {
  transform: scale(1.05) rotate(1deg);
  transition: 0.4s;
}

/* Text glow */
h2 {
  text-shadow: 0 0 10px pink, 0 0 20px purple;
}
`;
document.head.appendChild(style);

// Smooth page transition
window.nextPage = (function(original) {
  return function(pageNumber) {
    const current = document.querySelector(".page.active");
    if (current) {
      current.style.opacity = 0;
    }
    setTimeout(() => {
      original(pageNumber);
    }, 500);
  };
})(window.nextPage);
