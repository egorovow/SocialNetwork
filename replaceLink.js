function replaceLink(message) {
  const arr = message.split(' ');
  let str = '';
  const arrNew = [];
  let res = '';

  arr.forEach((el) => {
    if (el.slice(0, 8) == 'https://') { str = el.slice(8); el = ''; }
    if (el.slice(0, 7) == 'http://') { str = el.slice(7); el = ''; }
    if (el.slice(0, 4) == 'www.') { str = el.slice(4); el = ''; }
    if (el.slice(0, 6) == 'ftp://') { str = el.slice(6); el = ''; }
    if (el.slice(-4, -3) == '.') { str = el; }
    if (el.slice(-3, -2) == '.') { str = el; }

    if (str != '') {
      res = `<a href="https://${str}">${str}</a>`;
      arrNew.push(res);
      str = '';
    }
  });
  return arrNew.join(' ');
}
