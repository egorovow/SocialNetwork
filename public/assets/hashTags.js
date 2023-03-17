export default function hashTags(tag) {
  const arr = tag.split(' ');
  const arrNew = [];
  let str = '';
  let elem = '';
  arr.forEach((el) => {
    if (el.slice(0, 1) === '#') {
      str = el.slice(1);
      elem = `<a href="/search?tag=${str}">#${str}</a>`;
      arrNew.push(elem);
    } else {
      arrNew.push(el);
    }
  });
  const res = arrNew.join(' ');
  return res;
}
