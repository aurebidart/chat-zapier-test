<?php ?>
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Chat Zapier Test</title>

  <link rel="stylesheet" href="styles.css">

  <script async type="module"
    src="https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js">
  </script>
</head>
<body>

<div id="chat-bubble-wrapper">
  <div id="chat-tooltip">¿Charlamos?</div>
  <button id="chat-bubble">💬</button>
</div>

<div id="chat-panel" class="hidden">
  <div id="chat-header">
    <span>Mesa de ayuda</span>
    <button id="chat-close">✕</button>
  </div>

  <div id="chat-body">
    <zapier-interfaces-chatbot-embed
      is-popup="false"
      chatbot-id="cmh3lct9b005clefblmzrwx4c">
    </zapier-interfaces-chatbot-embed>
  </div>
</div>

</div>


<script src="app.js"></script>
</body>
</html>
