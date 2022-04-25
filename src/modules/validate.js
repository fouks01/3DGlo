const validate = () => {

    const text = document.querySelectorAll('[type="text"]');
    const placeholder = document.querySelectorAll('[placeholder="Ваше сообщение"]');
    const email = document.querySelectorAll('[type="email"]');
    const tel = document.querySelectorAll('[type="tel"]');

    text[0].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
    });

    text[4].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
    });

    text[5].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
    });

    placeholder[0].addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s-]/gi, '');
    });


    email.forEach((event) => {
        event.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w0-9\-\.\_\!\~\*\'@]/gi, '');
        });
    });


    tel.forEach((event) => {
        event.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\()\-]/gi, '');
        });
    });

};

export default validate;