import throttle from 'lodash.throttle'

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

saveForm();


function onInputChange() {
    const email = input.value;
    const message = textarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email: email, message: message}));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const { elements: email, message } = evt.currentTarget;
    console.log({ email: input.value, message: message.value });
    localStorage.removeItem(STORAGE_KEY); 
    evt.currentTarget.reset();
}

function saveForm(evt) {
    const savedTextValue = localStorage.getItem(STORAGE_KEY);
    const parseMessage = JSON.parse(savedTextValue);
    if (parseMessage) {
        console.log(input.value = parseMessage.email);
        console.log(textarea.value = parseMessage.message);
    }
}