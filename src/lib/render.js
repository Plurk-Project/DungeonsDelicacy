import { weaponAttack, lifeAttrs } from './data';

const point = {
  rows: [82, 158],
  columns: [352].concat(Array.from({ length: 8 }, (v, k) => 421 + k * 47)),
};

const position = {
  avatar: [191, 55],
  名稱: [229, 158],
  武器: [point.columns[0], point.rows[0]],
  血量: [point.columns[1], point.rows[0]],
  防禦: [point.columns[2], point.rows[0]],
  迴避: [point.columns[3], point.rows[0]],
  命中: [point.columns[4], point.rows[0]],
  傷害: [point.columns[5], point.rows[0]],
  法傷: [point.columns[6], point.rows[0]],
  基本: [(point.columns[7] + point.columns[8]) / 2, point.rows[0]],
  種族: [point.columns[0], point.rows[1]],
  偵查: [point.columns[1], point.rows[1]],
  扒竊: [point.columns[2], point.rows[1]],
  開鎖: [point.columns[3], point.rows[1]],
  採集: [point.columns[4], point.rows[1]],
  料理: [point.columns[5], point.rows[1]],
  鑑定: [point.columns[6], point.rows[1]],
  鍛造: [point.columns[7], point.rows[1]],
  治療: [point.columns[8], point.rows[1]],
};

function drawAvatar() {
  this.ctx.drawImage(this, ...position.avatar, 76, 76);
}

function drawChar(ctx, char) {
  for (let [key, value] of Object.entries(char)) {
    if (Object.keys(position).includes(key)) {
      drawAttr(ctx, { name: key, value });
    }
  }
  drawAttr(ctx, { name: '基本', value: weaponAttack[char.武器] });
}

/**
 *
 * @param {*} ctx
 * @param {Object} attr { name, value }
 */
function drawAttr(ctx, attr) {
  ctx.textAlign = 'center';
  ctx.font = '22px Arial, "微軟正黑體"';

  ctx.fillStyle = 'black';
  if (lifeAttrs.includes(attr.name)) {
    if (attr.value >= 3) {
      ctx.fillStyle = 'DarkOrange';
    } else if (attr.value >= 1) {
      ctx.fillStyle = 'RoyalBlue';
    }
  }

  ctx.fillText(attr.value, ...position[attr.name]);
}

function drawImageActualSize() {
  this.canvas.width = this.naturalWidth;
  this.canvas.height = this.naturalHeight;
  this.ctx.drawImage(this, 0, 0);

  drawChar(this.ctx, this.char);
}

export function renderEasyCard(
  canvas,
  char,
  avatarSrc = require('@/assets/avatar.png'),
) {
  const ctx = canvas.getContext('2d');
  const image = new Image();
  image.char = char;
  image.canvas = canvas;
  image.ctx = ctx;
  image.onload = drawImageActualSize;
  image.src = require('@/assets/easy-card.png');

  const avatar = new Image();
  avatar.ctx = ctx;
  avatar.onload = drawAvatar;
  if (char.avatar) {
    avatarSrc = char.avatar;
  }
  avatar.src = avatarSrc;
}
