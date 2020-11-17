const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validate()
})

function validate() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const password1Value = password1.value.trim()
  const password2Value = password2.value.trim()

  if (usernameValue === '') {
    setErrorFor(username, 'Username is empty')
  } else {
    setSuccessFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Oops. It looks like this is not an email')
  } else {
    setSuccessFor(email)
  }

  if (password1Value === '') {
    setErrorFor(password1, 'Password is empty')
  } else {
    setSuccessFor(password1)
  }

  if (password1Value !== password2Value) {
    setErrorFor(password2, 'Passwords do not match')
  } else {
    setSuccessFor(password2)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('.error')

  small.innerText = message
  formControl.className = 'form-control error'
}

function setSuccessFor() {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    email
  )
}
