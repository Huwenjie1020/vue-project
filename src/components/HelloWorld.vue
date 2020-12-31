<template>
  <div class="hello">
    <h1>{{ boxValueArr }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      boxValue: 0,
      box: {
        index: 1,
        timestamp: 0,
        currentHash: '',
        lastHash: '0',
        value: 0,

      },
      hash: 0,
      boxValueArr: []
    }
  },
  mounted() {
    this.getBoxValue()
  },
  methods: {
    //取hash值算法
    hashNode(val){
      const crypto = require('crypto');
     return new Promise(resolve =>
      setTimeout(
        () =>
          resolve(
            crypto
              .createHash('sha256')
              .update(val)
              .digest('hex')
          ), 0)
     )
    },
    getBoxValue() {
      const crypto = require('crypto');      
      let reg = /^(0{5})/;
      let lastHash = 0;
      let currentHash = 0;
      for(let index = 1; index <= 10; index++) {
        let boxValue = 0; 
        // let timestamp = new Date().getTime();
        console.log('-----currentHash', currentHash)
        while(!reg.test(currentHash)) {
          console.log('---', reg.test(currentHash));
          boxValue++;
          this.box = {
            index,
            // timestamp,
            lastHash,
            value: boxValue
          }
          const boxString = Object.values(this.box).join('')
          // await this.hashNode(boxString).then((res) => {
          //   console.log('------hash', res)
          
            currentHash = crypto
              .createHash('sha256')
              .update(boxString)
              .digest('hex');
          // })
        }
        lastHash = currentHash;
        this.boxValueArr.push(boxValue)
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
