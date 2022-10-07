import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]'),
}

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', onFormInput);

populateAllForm();

function onFormInput (ev) {
    const { name, value } = ev.target;
    formData[name] = value;

    try {
        const stringifyData = JSON.stringify(formData);
        localStorage.setItem(LOCAL_STORAGE_KEY, stringifyData);
    } catch (error) {
        console.error(error.message);
    }

    // const formDataJSON =JSON.stringify(formData);
    // console.log(formDataJSON);

    // console.log(formDataJSON);
    // populateAllForm();
}

function populateAllForm() {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedData) {
        return;
    }
    try {
        const parseData = JSON.parse(savedData);
        console.log(parseData);
    } catch (error) {
        console.error(error.message)
    }
}


// refs.form.addEventListener('input', ev => {
//     formData[ev.target.name] = ev.target.value;
//     const formDataJSON = JSON.stringify(formData);
//     console.log(formDataJSON);
//     localStorage.setItem(LOCAL_STORAGE_KEY, formDataJSON);
//     console.log(formDataJSON);
//     try {
//         const savedData = JSON.parse(formDataJSON);
//         console.log(savedData);
//         // if (savedData) {
//         //     ev.target.value = savedData;
//         // }
//     }
//     catch (err) {
//         console.error('error:', err.message);
//     }
//     const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     if (savedData) {
//         console.log(savedData);
//         formData[ev.target.name] = savedData;
//     }
// })

// populateTextarea();

function onFormSubmit(ev) {
    ev.preventDefault();

    console.log('Poletela forma =>');

    ev.currentTarget.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

// function onTextareaInput(ev) {
//     const message = ev.target.value;
//     localStorage.setItem(LOCAL_STORAGE_KEY, message);

//     console.log(message);
// };

// function populateTextarea() {
//     try {
//         const savedData = JSON.parse(formDataJSON);
//         console.log(savedData);
//     }
//     catch (err) {
//         console.error('error:', err.message);
//     }};
//     const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);

//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// };