
const form = document.getElementById("form");
const firstname = document.getElementById('firstName');
const lastname = document.getElementById("lastName");
const email = document.getElementById('email');
const password = document.getElementById('password');
const small1 = document.getElementById('small1');
const formGroup = document.getElementsByClassName('form-group');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm();
});


function validateForm() {
  if (firstname.value == "") {
    firstname.classList.add('is-invalid');
    small1.classList.remove('small1');
    small1.classList.add('error');

  }else{
    firstname.classList.remove('is-invalid');
    firstname.classList.add('is-valid');
    small1.classList.add('small1');
  }

  if (lastname.value == "")  {
    lastname.classList.add('is-invalid');
    small2.classList.remove('small1');
    small2.classList.add('error');
  }else{
    lastname.classList.remove('is-invalid');
    lastname.classList.add('is-valid');
    small2.classList.add('small1');

  }
  
  if (email.value == "")  {
    email.classList.add('is-invalid');
    small3.classList.remove('small1');
    small3.classList.add('error');
  }else{
    email.classList.remove('is-invalid');
    email.classList.add('is-valid');
    small3.classList.add('small1');

  }
  if (password.value == "") {
    password.classList.add('is-invalid');
    small4.classList.remove('small1');
    small4.classList.add('error');
  }else{
    password.classList.remove('is-invalid');
    password.classList.add('is-valid');
    small4.classList.add('small1');

  }

}
