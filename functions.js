function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function validateEmail(email) {
    return email.includes('@');
}
  
function validatePassword(password) {
    if (password.length < 12) {
      return false;
    }
  
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasUpperCaseLetter = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  
    return hasLetter && hasUpperCaseLetter && hasDigit && hasSpecialCharacter;
  }
  