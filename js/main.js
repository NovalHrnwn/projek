// transisi.js
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
});

document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (
    url &&
    !url.startsWith('#') &&
    !url.startsWith('mailto:') &&
    !url.startsWith('tel:')
  ) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.remove('page-loaded');
      setTimeout(() => {
        window.location.href = url;
      }, 300); // Sesuaikan dengan durasi CSS
    });
  }
});
