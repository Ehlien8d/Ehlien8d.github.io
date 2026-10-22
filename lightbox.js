// Click any image in the page content to see it full size.
// Arrow keys or the side buttons move between images on the same page; Esc or a click closes.
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll('main img')).filter(function (i) {
    return !i.closest('.card');
  });
  if (!imgs.length || !window.HTMLDialogElement) return;

  var box = document.createElement('dialog');
  box.className = 'lightbox';
  box.setAttribute('aria-label', 'Image viewer');
  box.innerHTML =
    '<button class="lb-close" type="button" aria-label="Close">&times;</button>' +
    '<button class="lb-prev" type="button" aria-label="Previous image">&#8249;</button>' +
    '<img alt="">' +
    '<p></p>' +
    '<button class="lb-next" type="button" aria-label="Next image">&#8250;</button>';
  document.body.appendChild(box);
  var big = box.querySelector('img'), cap = box.querySelector('p'), current = 0;

  function show(n) {
    current = (n + imgs.length) % imgs.length;
    var img = imgs[current], fig = img.closest('figure'), fc = fig && fig.querySelector('figcaption');
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    cap.textContent = fc ? fc.textContent : img.alt;
  }
  function open(n) { show(n); if (!box.open) box.showModal(); }

  imgs.forEach(function (img, n) {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', 'Enlarge image: ' + img.alt);
    img.addEventListener('click', function () { open(n); });
    img.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(n); }
    });
  });

  var single = imgs.length < 2;
  box.querySelector('.lb-prev').hidden = single;
  box.querySelector('.lb-next').hidden = single;
  box.querySelector('.lb-close').addEventListener('click', function () { box.close(); });
  box.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  box.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box || e.target === big) box.close(); });
  box.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
  });
  box.addEventListener('close', function () { imgs[current].focus({ preventScroll: true }); });
})();
