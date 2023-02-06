function hashTags(tag) {
  const arr = tag.split(' ');
  const arrNew = [];
  let str = '';
  arr.forEach((el) => {
    if (el.slice(0, 1) == '#') {
      str = el.slice(1);
      el = `<a href="/search?tag=${str}">#${str}</a>`;
    }
    arrNew.push(el);
  });
  const res = arrNew.join(' ');
  return res;
}