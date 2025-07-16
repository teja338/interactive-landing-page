
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const msg = document.getElementById('formMsg');

  if (!email.includes('@') || !email.includes('.')) {
    msg.textContent = "Please enter a valid email address.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";
    this.reset();
  }
});


const topBtn = document.getElementById('topBtn');
window.onscroll = function () {
  topBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
