export default function replaceLink(message) {
  const arr = message.split(' ');
  let str = '';
  const arrNew = [];
  let res = '';
  let elem = '';

  arr.forEach((el) => {
    elem = el;

    if (el.includes('.com')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.рф')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.org')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.net')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.uk')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.de')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.ru')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.xyz')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.online')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.info')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('.ch')) {
      if (el.includes('https://')
          || el.includes('http://')
          || el.includes('ftp://')
          || el.includes('www.')) { str = ''; elem = ''; } else {
        str = el; elem = '';
      }
    }

    if (el.includes('https://') && el.includes('.')) { str = el.slice(8); elem = ''; }
    if (el.includes('http://') && el.includes('.')) { str = el.slice(7); elem = ''; }
    if (el.includes('www.') && el.includes('.')) { str = el.slice(4); elem = ''; }
    if (el.includes('ftp://') && el.includes('.')) { str = el.slice(6); elem = ''; }

    if (elem !== '') { arrNew.push(el); }

    if (str !== '') {
      res = `<a href="https://${str}">${str}</a>`;
      arrNew.push(res);
      str = '';
    }
  });

  return arrNew.join(' ');
}
