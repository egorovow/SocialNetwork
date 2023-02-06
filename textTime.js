function textTime(numberTime) {
  let str = '';

  // минуты
  if (numberTime == 1) { str = `${numberTime} минуту назад`; }
  if (numberTime >= 2 && numberTime <= 4) { str = `${numberTime} минуты назад`; }
  if (numberTime >= 5 && numberTime <= 59) { str = `${numberTime} минут назад`; }

  // часы
  const hours = Math.floor(numberTime / 60);
  if (hours >= 1 && hours < 2) { str = `${hours} час назад`; }
  if (hours >= 2 && hours < 5) { str = `${hours} часа назад`; }
  if (hours >= 5 && hours < 21) { str = `${hours} часов назад`; }
  if (hours >= 21 && hours < 22) { str = `${hours} час назад`; }
  if (hours >= 22 && hours <= 23) { str = `${hours} часа назад`; }

  // дни
  const days = Math.floor(numberTime / 1440);
  if (days == 1) { str = `${days} день назад`; }
  if (days >= 2 && days < 5) { str = `${days} дня назад`; }
  if (days >= 5 && days < 21) { str = `${days} дней назад`; }

  if (days >= 21 && days < 366) {
    const lastNumbers = days % 10;
    if (lastNumbers == 0) { str = `${days} дней назад`; }
    if (lastNumbers == 1) { str = `${days} день назад`; }
    if (lastNumbers >= 2 && lastNumbers < 5) { str = `${days} дня назад`; }
    if (lastNumbers >= 5 && lastNumbers < 10) { str = `${days} дней назад`; }
  }

  // годы
  if (days >= 366) { str = 'более года назад'; }

  return str;
}