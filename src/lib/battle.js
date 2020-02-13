const Normal = require('distributions').Normal;
const DICE_RELATION = Math.E;

Number.prototype.betweenEq = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this >= min && this <= max;
};

const range = (n, offset = 1) => [...Array(n).keys()].map((x) => x + offset);

let getTotalHurt = (attackers, victims) => {
  return victims
    .map((victim) => {
      return attackers
        .map((attacker) => {
          let damage = attacker.attack - victim.defense;
          if (damage <= 0) return 0;
          let hitPoints = range(6, attacker.hit);
          let hitRate =
            hitPoints.filter((x) => x >= victim.dodge).length /
            hitPoints.length;
          damage *= hitRate;
          return damage / victims.length;
        })
        .reduce((a, b) => a + b, 0);
    })
    .reduce((a, b) => a + b, 0);
};

/**
 *
 * @param {Array} entities
 */
let getTotalHP = (entities) => {
  return entities.map(({ hp }) => hp).reduce((a, b) => a + b, 0);
};

/**
 *
 * @param {Normal} dist1
 * @param {Normal} dist2
 */
const getIntersection = (dist1, dist2) => {
  if (dist1.variance() == dist2.variance())
    return (dist1.mean() + dist2.mean()) / 2;
  if (dist1.mean() > dist2.mean()) {
    let temp = dist1;
    dist1 = dist2;
    dist2 = temp;
  }
  return (
    (dist2.mean() * dist1.variance() ** 2 -
      dist2.variance() *
        (dist1.mean() * dist2.variance() +
          dist1.variance() *
            Math.sqrt(
              (dist1.mean() - dist2.mean()) ** 2 +
                2 *
                  (dist1.variance() ** 2 - dist2.variance() ** 2) *
                  Math.log(dist1.variance() / dist2.variance()),
            ))) /
    (dist1.variance() ** 2 - dist2.variance() ** 2)
  );
};

/**
 *
 * @param {Normal} charsDist
 * @param {Normal} monstersDist
 * @param {Number} cPoint
 */
const getWinRate = (charsDist, monstersDist, cPoint) => {
  let area;
  if (charsDist.mean() == monstersDist.mean()) {
    area = 1;
  } else if (charsDist.mean() > monstersDist.mean()) {
    area = 1 - monstersDist.cdf(cPoint) + charsDist.cdf(cPoint);
  } else {
    area = 1 - charsDist.cdf(cPoint) + monstersDist.cdf(cPoint);
  }
  let winRate;
  if (charsDist.mean() > monstersDist.mean()) {
    winRate = 1 - area / 2;
  } else {
    winRate = area / 2;
  }
  return winRate;
};

/**
 *
 * @param {Array} chars array of entity
 * @param {Array} monsters array of entity
 */
export function calcWinRate(chars, monsters) {
  let charsHP = getTotalHP(chars);
  let monsetersHP = getTotalHP(monsters);

  let charsHurt = getTotalHurt(monsters, chars);
  let monstersHurt = getTotalHurt(chars, monsters);

  let charsDieRoundMean = charsHP / charsHurt;
  let monstersDieRoundMean = monsetersHP / monstersHurt;
  if (Number.isNaN(charsDieRoundMean) || Number.isNaN(monstersDieRoundMean)) {
    throw new Error('血量不能為 0');
  }
  if (charsDieRoundMean == Infinity && monstersDieRoundMean == Infinity) {
    throw new Error('無勝負！');
  } else if (charsDieRoundMean == Infinity) {
    return 1.0;
  } else if (monstersDieRoundMean == Infinity) {
    return 0.0;
  }

  const charsDist = new Normal(
    charsDieRoundMean,
    DICE_RELATION / monsters.length,
  );
  const monstersDist = new Normal(
    monstersDieRoundMean,
    DICE_RELATION / chars.length,
  );

  let cPoint = getIntersection(charsDist, monstersDist);
  let winRate = getWinRate(charsDist, monstersDist, cPoint);

  if (!cPoint.betweenEq(charsDist.mean(), monstersDist.mean())) {
    throw new Error(
      `cPoint ${cPoint} is not between ${charsDist.mean()} ${monstersDist.mean()}`,
    );
  }
  return winRate;
}

export const createEntity = (
  hp = 10,
  attack = 5,
  defense = 1,
  hit = 2,
  dodge = 5,
) => ({
  hp,
  attack,
  defense,
  hit,
  dodge,
});

function demo() {
  let winRate = calcWinRate(chars, monsters);
  console.log(Math.round(winRate * 100, 2) + '%');
}
