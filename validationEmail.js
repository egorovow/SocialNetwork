function validationEmail(email) {
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      if (email.slice(-4, -3) === '.'
      || email.slice(-3, -2) === '.') { return true; }
    }
  }
  return false;
}