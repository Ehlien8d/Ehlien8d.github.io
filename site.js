// Small site-wide helpers.
// "Copy" button next to the footer email: the mailto link does nothing on computers
// with no mail app set up, so this lets visitors grab the address with one click.
(function () {
  var link = document.querySelector('footer a[href^="mailto:"]');
  if (!link || !navigator.clipboard) return;
  var addr = link.getAttribute('href').replace('mailto:', '');
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy-email';
  btn.textContent = 'Copy';
  btn.setAttribute('aria-label', 'Copy email address');
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(addr).then(function () {
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
    });
  });
  link.insertAdjacentElement('afterend', btn);
})();
