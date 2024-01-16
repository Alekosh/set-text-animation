const text1 = document.querySelector('.first-p');

const Load = () => {
  setTimeout(() => {
    text1.textContent = 'Web Developer';
  }, 0);
  setTimeout(() => {
    text1.textContent = 'Gamer';
  }, 4000);
  setTimeout(() => {
    text1.textContent = 'Video Editor';
  }, 8000);
}

Load();
setInterval(Load, 12000);
// ======================================