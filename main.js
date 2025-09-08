const navBtn = document.querySelector('#menu');
const menubar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
  const isHidden = menubar.classList.contains('hidden');

  navBtn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');

  if (isHidden) {
    menubar.classList.remove('hidden');
    menubar.classList.add('flex');
  } else {
    menubar.classList.remove('flex');
    menubar.classList.add('hidden');
  }
});
