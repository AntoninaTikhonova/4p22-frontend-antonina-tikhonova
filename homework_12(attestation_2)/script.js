'use strict';

const errorColor = '#EE2424';
const commonColor = '#787878';

const emailInput = document.getElementById('email');
const emailInvalid = document.getElementById('email-valid');
const passwordInput = document.getElementById('password');
const passwordInvalid = document.getElementById('password-valid');
const passwordRepeatInput = document.getElementById('password-repeat');
const passwordRepeatInvalid = document.getElementById('password-repeat-valid');

const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmation = formData.get("password-repeat");
  const gender = formData.get("gender");
  const aboutYourself = formData.get("about-yoyrself");
  const agreement = formData.get("agreement");

  let isValid = true;

  if (!email) {
    emailInput.style.borderColor = errorColor;
    emailInvalid.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailInput.style.borderColor = errorColor;
    emailInvalid.innerText = "Email введён некорректно";
    isValid = false;
  } else {
    emailInput.style.borderColor = commonColor;
    emailInvalid.innerText = "";
    isValid = true;
  }

  if (!password) {
    passwordInput.style.borderColor = errorColor;
    passwordInvalid.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (password.length < 8) {
    passwordInput.style.borderColor = errorColor;
    passwordInvalid.innerText = "Пароль должен содержать не менее 8 символов";
    isValid = false;
  } else {
    passwordInput.style.borderColor = commonColor;
    passwordInvalid.innerText = "";
    isValid = true;
  }

  if (!confirmation) {
    passwordRepeatInput.style.borderColor = errorColor;
    passwordRepeatInvalid.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (confirmation !== password) {
    passwordRepeatInput.style.borderColor = errorColor;
    passwordRepeatInvalid.innerText = "Пароли не совпадают";
    isValid = false;
  } else {
    passwordRepeatInput.style.borderColor = commonColor;
    passwordRepeatInvalid.innerText = "";
    isValid = true;
  }

  if (isValid === true) {
        console.log({
            email: email,
            password: password,
            confirmation: confirmation,
            gender: gender,
            textarea: aboutYourself,
            checkbox: agreement,
        }
        );
        document.getElementById('form').reset();
    }
});