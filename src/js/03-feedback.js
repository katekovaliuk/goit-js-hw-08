import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: ''};
console.log(formData);

const formRef = document.querySelector('.feedback-form');
// console.log(formRef);
const emailInputRef = document.querySelector('input');
// console.log(emailInputRef);
const messageTextareaRef = document.querySelector('textarea');
// console.log(messageTextareaRef);


formRef.addEventListener("input", throttle(inputForm, 500));
formRef.addEventListener("submit", onFormSubmit);

filledForm()

function inputForm(event) {
  
formData[event.target.name] = event.target.value;   
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
}


function onFormSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, message },
  } = event.currentTarget;
    
    if (email.value === "" || message.value === "") {
       return;
    }
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();


    localStorage.removeItem(STORAGE_KEY);
}


function filledForm() {
    
    const savedInputs = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // console.log(savedInputs);
    if (savedInputs) {
        emailInputRef.value = savedInputs.email;
        messageTextareaRef.value = savedInputs.message;
      
        console.log("savedInputs", savedInputs); 
         
    }
   
}

