const crypto = require('crypto');      
let reg = /^(0{5})/;
let lastHash = 0;
for (let index = 1; index <= 10; index++) {
  let currentHash = 0;
  let boxValue = 0;
  // let timestamp = new Date().getTime();
  while (!reg.test(currentHash)) {
    boxValue++;
    this.box = {
      index,
      // timestamp,
      lastHash,
      value: boxValue
    }
    const boxString = Object.values(this.box).join('')
    currentHash = crypto
      .createHash('sha256')
      .update(boxString)
      .digest('hex');
  }
  lastHash = currentHash;
  console.log('-----神秘数字', boxValue)
}