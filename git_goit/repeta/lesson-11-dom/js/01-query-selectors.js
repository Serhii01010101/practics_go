const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 *
 *
 */

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log(navEl);

  const navLinksEl = navEl.querySelectorAll('.site-nav__link');
  console.log(navLinksEl);
});

/*
 * Document.querySelector* и Element.querySelector*
 */
