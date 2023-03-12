export default function platformFilter(message, arrFuckWord) {
  const messageNew = message.toLowerCase();
  const arr = messageNew.split(' ');
  const arrNew = [];
  const strFuckWord = [];
  arr.forEach((el) => {
    if (arrFuckWord.includes(el)) {
      for (let i = 0; i < el.length; i += 1) {
        strFuckWord.push('*');
      }
      const str = strFuckWord.join('');
      arrNew.push(str);
    } else arrNew.push(el);
  });
  return arrNew.join(' ');
}
