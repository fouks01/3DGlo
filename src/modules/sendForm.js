const sendForm = ({
    formId,
    someElem = []
}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Биба с вами свяжется!';

    const text = document.querySelectorAll('[name="user_name"]');
    const placeholder = document.querySelectorAll('[placeholder="Ваше сообщение"]');
    const email = document.querySelectorAll('[type="email"]');
    const tel = document.querySelectorAll('[type="tel"]');





    const validate = (list) => {
        let success = true;



        if (text[0].value.trim() != '' && /[0-9\()\-]/gi.test(tel[0].value)) {
            success = true;
        } else if (text[1].value.trim() != '' && /[0-9\()\-]/gi.test(tel[1].value) && /[а-яА-Я0-9\s\.,\!?;:\-_]/gi.test(placeholder[0].value)) {
            success = true;
        } else if (text[2].value.trim() != '' && /[0-9\()\-]/gi.test(tel[2].value)) {
            success = true;
        } else {
            success = false;
        }


        // if (/[^а-яА-Я\s-]/gi.test(text.value)) {
        //     success = true;
        // } else {
        //     success = false;
        // }

        // if (/[^а-яА-Я0-9\s\.,\!?;:\-_]/gi.test(placeholder.value)) {
        //     success = true;
        // } else {
        //     success = false;
        // }

        // if (/[^0-9\()\-]/gi.test(tel.value)) {
        //     success = true;
        // } else {
        //     success = false;
        // }

        return success;
    };


    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        if (formId === 'form3') {
            statusBlock.style.color = 'white';
        }

        statusBlock.textContent = loadText;

        form.append(statusBlock);


        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);


            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        console.log('submit');

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                    statusBlock.textContent = successText;
                    setTimeout(() => {
                        statusBlock.textContent = '';
                    }, 2000);
                    formElements.forEach(input => {
                        input.value = '';
                    });
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })

        } else {
            alert('Данные не валидны!');
        }
    };

    try {
        if (!form) {
            throw new Error('Верни форму на место, чумба!');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        });
    } catch (error) {
        console.log(error.message);
    }



};

export default sendForm;