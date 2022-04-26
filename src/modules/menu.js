const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    closeBtn.onclick = () => {
        closeBtn.setAttribute('href', '#close');
        return false;
    };

    menuBtn.addEventListener('click', handleMenu);
    // closeBtn.addEventListener('click', handleMenu);

    // menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));

    menu.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn')) {
            handleMenu();
        } else if (e.target.closest('a')) {
            handleMenu();
        }
    });


};

export default menu;