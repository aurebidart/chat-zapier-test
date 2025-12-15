document.addEventListener('DOMContentLoaded', () => {
  const bubbleWrapper = document.getElementById('chat-bubble-wrapper');
  const tooltip = document.getElementById('chat-tooltip');
  const bubble = document.getElementById('chat-bubble');

  const panel = document.getElementById('chat-panel');
  const closeBtn = document.getElementById('chat-close');

  // Abrir chat
  bubble.addEventListener('click', () => {
    panel.classList.remove('hidden');
    bubbleWrapper.classList.add('hidden'); // 👈 OCULTA burbuja
    panel.scrollTop = panel.scrollHeight;
  });

  // Cerrar chat
  closeBtn.addEventListener('click', () => {
    panel.classList.add('hidden');
    bubbleWrapper.classList.remove('hidden'); // 👈 VUELVE burbuja
    tooltip.style.opacity = '1';
  });
});

