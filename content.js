window.addEventListener('load', (event) => {
  const anchorElements = document.querySelectorAll('a[href^="https://solscan.io/token/"]');
  const rugcheckBaseUrl = "https://rugcheck.xyz/tokens/";
  if (anchorElements.length > 0) {
    anchorElements.forEach((anchorElement) => {
      const url = anchorElement.getAttribute('href');
      const tokenIndex = url.lastIndexOf('/');

      if (tokenIndex !== -1) {
        const token = url.substring(tokenIndex + 1);
        if (token !== 'So11111111111111111111111111111111111111112') {
          const newAnchor = document.createElement('a');
          newAnchor.textContent = "RugCheck ↗️";
          newAnchor.href = `https://rugcheck.xyz/tokens/${token}`;
          newAnchor.target = '_blank';
          newAnchor.style.position = 'fixed';
          newAnchor.style.padding = '0.25em';
          newAnchor.style.bottom = '0';
          newAnchor.style.right = '0';
          newAnchor.style.zIndex = '9999';
          newAnchor.style.backgroundColor = 'white';
          newAnchor.style.fontSize = '1.25em';
          newAnchor.style.color = 'black';
          newAnchor.style.fontWeight = 'bold';
          newAnchor.style.border = 'solid 4px black';
          newAnchor.style.transition = 'all 200ms';
          newAnchor.style.borderTopLeftRadius = '1em';

          newAnchor.addEventListener('mouseenter', () => {
            newAnchor.style.backgroundColor = 'lightgray';
          });

          newAnchor.addEventListener('mouseleave', () => {
            newAnchor.style.backgroundColor = 'white';
          });

          document.body.appendChild(newAnchor);
        }
      }
    });
  }
});
