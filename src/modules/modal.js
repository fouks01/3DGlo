const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const modalBlock = modal.querySelector('.popup-content');
    const width = document.documentElement.clientWidth;


    let count = 0;
    let modalMove;

    const modalAnimation = () => {
        count++;
        modalMove = requestAnimationFrame(modalAnimation);

        if (count < 43) {
            modalBlock.style.left = count + '%';
        } else {
            cancelAnimationFrame(modalMove);
        }
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (screen.width > 767) {
                modalAnimation();
                modal.style.display = 'block';
            } else {
                modal.style.display = 'block';
            }
        });
    });


    closeBtn.addEventListener('click', () => {
        count = 0;
        modal.style.display = 'none';
    });
};

export default modal;