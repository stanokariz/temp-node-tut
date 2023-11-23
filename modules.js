// console.log(__dirname)
// setInterval(()=> {
//     console.log('Karibu');
// }, 10000)

const names = require('./2-nam')
const sayhi = require('./3-utils')
const data = require('./alternative-flavor')
require('./4-mind')

// console.log(data);
// console.log(names);

sayhi("sammy")
sayhi(names.john)
sayhi(names.peter)