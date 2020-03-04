/**
 * 將半形字串轉成全形
 * @returns {String} 全行字串
 */
String.prototype.halfToFull = function() {
  var temp = '';
  for (var i = 0; i < this.toString().length; i++) {
    var charCode = this.toString().charCodeAt(i);
    if (charCode <= 126 && charCode >= 33) {
      charCode += 65248;
    } else if (charCode == 32) {
      // 半形空白轉全形
      charCode = 12288;
    }
    temp = temp + String.fromCharCode(charCode);
  }
  return temp;
};

/**
 * 將全形字串轉成半形
 * @returns {String} 半行字串
 */
String.prototype.fullToHalf = function() {
  var temp = '';
  for (var i = 0; i < this.toString().length; i++) {
    var charCode = this.toString().charCodeAt(i);
    if (charCode <= 126 + 65248 && charCode >= 33 + 65248) {
      charCode -= 65248;
    } else if (charCode == 12288) {
      // 半形空白轉全形
      charCode = 32;
    }
    temp = temp + String.fromCharCode(charCode);
  }
  return temp;
};
