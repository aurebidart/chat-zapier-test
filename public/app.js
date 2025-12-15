// public/app.js
document.addEventListener('DOMContentLoaded', () => {
  const bubble = document.getElementById('chat-bubble');
  const overlay = document.getElementById('chat-overlay');
  const closeBtn = document.getElementById('chat-close');

  const open = () => {
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.add('hidden');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  bubble.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Cerrar click afuera
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Cerrar con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) close();
  });
});
