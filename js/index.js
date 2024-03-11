const browserForm = document.querySelector('.browser-form')
const dataInfo = document.querySelector('.data-info')
const emailInput = document.querySelector('.input-email')
const countrySelect = document.querySelector('.select')
const zipCodeInput = document.querySelector('.input-zip')
const passwordInput = document.querySelector('.input-password')
const confirmationPasswordInput = document.querySelector('.input-confirmation')
const confirmBtn = document.querySelector('.confirm')
const dataConfirm = document.querySelector('.data-confirm')

const checkPassword = () => {
    if (passwordInput.value === confirmationPasswordInput.value) {
        return true
    }
}

const confirmForm = () => {
    let emailValid = false
    let zipCodeValid = false
    let passwordValid = false

    const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validRegexZipCode = /^\d{2}-\d{3}$/

    if (emailInput.value === '') return window.alert("Brak email'a")
    if (emailInput.value.match(validRegexEmail)) {
        emailValid = true
    } else return window.alert("Zły format email'a")
    if (countrySelect.value === '') return window.alert("Brak kraju")
    if (zipCodeInput.value === '') return window.alert("Brak zipCodu")
    if (zipCodeInput.value.match(validRegexZipCode)) {
        zipCodeValid = true
    } else return window.alert("Zły format zipCodu")
    if (passwordInput.value === '') return window.alert("Brak hasła")
    if (confirmationPasswordInput.value === '') return window.alert("Brak potwierdzenia hasła")
    if (passwordInput.value === confirmationPasswordInput.value) {
    passwordValid = true
    } else return window.alert("Złe potwierdzenie hasła")

    if (emailValid && zipCodeValid && passwordValid) {
        browserForm.classList.add('form-hide')
        dataInfo.classList.add('active')
        emailValid = false
        zipCodeValid = false
        passwordValid = false
    }
}

const reset = () => {
    emailInput.value = ''
    countrySelect.value = ''
    zipCodeInput.value = ''
    passwordInput.value = ''
    confirmationPasswordInput.value = ''
    browserForm.classList.remove('form-hide')
    dataInfo.classList.remove('active')
}

confirmBtn.addEventListener('click', confirmForm)
dataConfirm.addEventListener('click', reset)