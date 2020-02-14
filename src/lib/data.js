export const personalAttrs = ['經驗', '身高', '體重', '體力', '金錢'];

export const battleAttrs = ['命中', '傷害', '防禦', '迴避', '法傷', '治療'];

export const lifeAttrs = [
  '料理',
  '採集',
  '體能',
  '偵查',
  '鑑定',
  '鍛造',
  '開鎖',
  '扒竊',
];

export const attrs = personalAttrs.concat(battleAttrs).concat(lifeAttrs);

export const weaponAttack = {
  劍盾: 'D8',
  雙刀: '2D6',
  杖盾: 'D4',
  法杖: 'D6',
  盾錘: 'D6',
  雙手鈍器: 'D8',
  弓箭: 'D10',
  雙手槍: 'D10',
};
