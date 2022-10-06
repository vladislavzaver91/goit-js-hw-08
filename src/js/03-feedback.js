const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]'),
}

const LOCAL_STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(ev) {
    ev.preventDefault();

    console.log('Poletela forma =>');

    ev.currentTarget.reset();
}

function onTextareaInput(ev) {
    const message = ev.currentTarget.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, message);

    console.log(message);
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}