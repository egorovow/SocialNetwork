export default function postSize(message) {
  const arr = message.split(' ');
  const arrNew = [];
  arr.forEach((el) => {
    if (el.slice(0, 8) === 'https://'
        || el.slice(0, 7) === 'http://'
        || el.slice(0, 4) === 'www.'
        || el.slice(0, 6) === 'ftp://'
        || el.slice(-4, -3) === '.'
        || el.slice(-3, -2) === '.') {
      arrNew.push('');
    } else { arrNew.push(el); }
  });
  const res = arrNew.join(' ');
  return res.length;
}
