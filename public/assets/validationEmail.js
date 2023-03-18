export default function validationEmail(email) {
  for (let i = 0; i < email.length; i += 1) {
    if (email[0] === ' '
        || email[i] === '['
        || email[i] === ']'
        || email[i] === '^'
        || email[i] === '$'
        || email[i] === '|'
        || email[i] === '?'
        || email[i] === '*'
        || email[i] === '('
        || email[i] === ')'
        || email[i] === '/'
        || email[i] === '!') { return false; }

    if (email[i] === '@'
        && email[0] !== '@'
        && email[0] !== ' ') {
      if (email.slice(-4, -3) === '.'
      || email.slice(-3, -2) === '.'
      || email.slice(-5, -4) === '.'
      || email.slice(-7, -6) === '.') { return true; }
    }
  }
  return false;
}
