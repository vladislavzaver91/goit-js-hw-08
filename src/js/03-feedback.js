import throttle from "lodash.throttle";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name=email]'),
    textarea: document.querySelector('[name=message]'),
}

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const notifyOpt = {
    timeout: 2000,
    backOverlay: true,
    cssAnimation: true,
    cssAnimationStyle: 'zoom',
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateAllForm();

function onFormInput () {
    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;
    const formData = { email, message, };

    try {
        const stringifyData = JSON.stringify(formData);
        localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
    } catch (error) {
        console.error(error.message);
    }
};

function populateAllForm() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!savedData) {
        return;
    }
    try {
        const parseData = JSON.parse(savedData);
        Object.entries(parseData).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        });
    }
    catch (error) {
        console.error(error.message)
    }
};

function onFormSubmit(ev) {
    ev.preventDefault();

    const {elements: { email, message }} = ev.target;

    if (email.value === '' || message.value === '') {
        Notify.failure('All fields must be filled!', notifyOpt);
        return;
    }

    const userData = {
        email: email.value,
        message: message.value,
    };
    console.log(userData);

    ev.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
};