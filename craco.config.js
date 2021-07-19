
const path = require('path')

const resolve = dir => path.resolve(__dirname,dir)

const a = {
  apply(){
    console.log(1);
  }
}

module.exports = {
  webpack:{
    alias:{
      '@':resolve('src')
    },
    plugins:[
      a
    ]
  },
  
}