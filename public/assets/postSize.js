export default function postSize(message) {
  const arr = message.split(' ');
  const arrNew = [];
  arr.forEach((el) => {
    if (el.includes('https://')
        || el.includes('http://')
        || el.includes('www.')
        || el.includes('ftp://')
        || el.includes('.com')
        || el.includes('.org')
        || el.includes('.net')
        || el.includes('.uk')
        || el.includes('.de')
        || el.includes('.ru')
        || el.includes('.xyz')
        || el.includes('.info')
        || el.includes('.ch')
        || el.includes('.online')
        || el.includes('.рф')) {
      arrNew.push('');
    } else { arrNew.push(el); }
  });
  const res = arrNew.join(' ');
  return res.length;
}
