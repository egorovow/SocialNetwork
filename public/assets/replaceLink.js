export default function replaceLink(message) {
  const arr = message.split(' ');
  let str = '';
  const arrNew = [];
  let res = '';
  let elem = '';

  arr.forEach((el) => {
    if (el.slice(0, 8) === 'https://') { str = el.slice(8); elem = ''; }
    if (el.slice(0, 7) === 'http://') { str = el.slice(7); elem = ''; }
    if (el.slice(0, 4) === 'www.') { str = el.slice(4); elem = ''; }
    if (el.slice(0, 6) === 'ftp://') { str = el.slice(6); elem = ''; }
    if (el.slice(-4, -3) === '.') { str = elem; }
    if (el.slice(-3, -2) === '.') { str = elem; }

    if (str !== '') {
      res = `<a href="https://${str}">${str}</a>`;
      arrNew.push(res);
      str = '';
    }
  });
  return arrNew.join(' ');
}
