function burgerMenu() {
    const menu = document.querySelector('.nav-list');
    menu.classList.toggle('active');
}

document.querySelector('.nav-burger-menu').addEventListener('click', burgerMenu)