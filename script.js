const burgerMenuIcon = document.querySelector('#iconBurgerMenu');
const menuBlock = document.querySelector('#header');

burgerMenuIcon.addEventListener('click', () => {
  menuBlock.classList.toggle('active_header_menu');

  if (burgerMenuIcon.src.endsWith('Icon-Burger-menu.png')) {
    burgerMenuIcon.src = 'img/icons/Icon-Close.png';
  } else {
    burgerMenuIcon.src = 'img/icons/Icon-Burger-menu.png';
  }
});




