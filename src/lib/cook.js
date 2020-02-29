export const cook = (level = 1, hard = 1, raw = 50, cooked = 80) => {
  let successRate = prob(cook2dice(level), hard);
  let successExp = getCookBonus(level) * cooked;
  let cookExp = successRate * successExp;
  let messages = [];
  messages.push('料理等級: ' + level);
  messages.push('料理難度: ' + hard);
  messages.push('生吃 / 料理: ' + raw + ' / ' + cooked);
  messages.push('料理期望值: ' + cookExp);
  messages.push('料理經驗值: ' + successExp);
  messages.push('料理成功率: ' + parseInt(successRate * 100) + '%');
  if (raw > cookExp) messages.push('建議: 生吃');
  else if (raw < cookExp) messages.push('建議: 熟食');
  else messages.push('建議: 都行');
  return messages.join('<br />');
};

/**
 * @param {Number} num
 * @param {Number} offset
 */
const getDice = (num, offset = 0) => {
  return Array.from(Array(num).keys()).map((n) => n + offset + 1);
};

const prob = (a, b) => {
  if (typeof a == 'number' && typeof b == 'number') {
    return Number(a >= b);
  } else if (typeof a == 'number') {
    return b.filter((i) => a >= i).length / b.length;
  } else if (typeof b == 'number') {
    return a.filter((i) => i >= b).length / a.length;
  } else {
    let count = 0;
    a.forEach((i) => {
      b.forEach((j) => {
        if (i >= j) count++;
      });
    });
    return count / (a.length * b.length);
  }
};

const cook2dice = (level) => {
  let dice;
  if (level < 1) {
    throw new Error('你不能料理', level);
  } else if (level <= 2) {
    dice = 4;
  } else {
    dice = 6;
  }
  return getDice(Number(dice), Number(level));
};

const getCookBonus = (level) => {
  let bonus;
  if (level < 1) {
    throw new Error('你不能料理', level);
  } else if (4 >= level) {
    bonus = 1.0;
  } else if (7 >= level) {
    bonus = 1.2;
  } else if (8 >= level) {
    bonus = 1.5;
  } else if (11 >= level) {
    bonus = 1.7;
  } else if (15 >= level) {
    bonus = 2.0;
  }
  return bonus;
};
