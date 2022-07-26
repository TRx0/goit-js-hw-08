import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

saveForm();

const formData = {}; 

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};

function onFormSubmit(evt) {
    evt.preventDefault();
    formData.email = input.value;
    formData.message = textarea.value;
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function saveForm() {
    const rawValue = localStorage.getItem(STORAGE_KEY);
    const valuesObject = JSON.parse(rawValue);
   
if(valuesObject) {
    const savedEmail = valuesObject.email;
    input.value = savedEmail;

    const savedMessage = valuesObject.textarea;
    textarea.value = savedMessage;
   
};
};
