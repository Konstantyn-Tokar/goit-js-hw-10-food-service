import createMenuMarkup from '../templates/menuCards.hbs';
import menu from '../data/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  listMenu: document.querySelector('.js-menu'),
  body: document.body,
};

refs.listMenu.innerHTML = createMenuMarkup(menu);
refs.checkbox.addEventListener('change', addsStyle);

function addsStyle(e) {
  if (e.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

(function () {
  refs.body.classList.add(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT,
  );
  refs.checkbox.checked = localStorage.getItem('theme') === Theme.DARK;
})();

// console.log(refs.checkbox);
// console.log(refs.listMenu);
// console.log(refs.body);
// console.log(createMenuMarkup(menu));
// console.log(refs.checkbox.checked);
