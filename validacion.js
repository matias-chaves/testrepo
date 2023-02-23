const $ = (selector) => document.querySelector(`${selector}`);
const $all = (selector) => document.querySelectorAll(`${selector}`);

let form_sent = false;

const form = $('#form');

function validateCheckbox() {
    const checkbox = $('#terminos');
    const btn_checkbox = $('#terminosBtn');

    if(checkbox.checked) {
        checkbox.classList.add('is-valid');
        checkbox.classList.remove('is-invalid');
        btn_checkbox.classList.remove('text-danger');
        btn_checkbox.classList.remove('is-invalid');
    } else {
        checkbox.classList.remove('is-valid');
        checkbox.classList.add('is-invalid');
        btn_checkbox.classList.add('text-danger');
        btn_checkbox.classList.add('is-invalid');
    }
}

function validatePwd() {
    const pwd1 = $('#password1');
    const pwd2 = $('#password2');

    if(pwd1.value != pwd2.value) {
        pwd2.setCustomValidity('Las contraseñas deben ser iguales');
    } else {
        pwd2.setCustomValidity('');
    }
}

function validateEmail(){
    const email = document.getElementById('email')

    let pattern = /^^[^]+@[^]+\.[a-z]{2,3}$/;

    if(email.value.match(pattern)){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid')
    }else{
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    }
}

form.addEventListener('submit', (e) => {
    form.classList.remove('was-validated');

    if(!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }

    validateCheckbox();

    validatePwd();

    form.classList.add('was-validated');
    form_sent = true;
})

form.addEventListener('input', (e) => {
    if(!form_sent) return;
    
    validatePwd();
})

checkbox.addEventListener('click', (e) => {
    if(!form_sent) return;

    validateCheckbox();
})



