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

refs.checkbox.addEventListener('change', addsStyle);

function addsStyle(e) {
    if()
}

console.log(refs.checkbox);
console.log(refs.listMenu);
console.log(refs.body);
console.log(createMenuMarkup(menu));

refs.listMenu.innerHTML = createMenuMarkup(menu);
