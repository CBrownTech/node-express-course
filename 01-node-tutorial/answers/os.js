const os = require('os');

console.log('Operating System:', os.platform());
console.log('Architecture:', os.arch());
console.log('CPU Information:', os.cpus());
console.log('Free Memory:', os.freemem());
console.log('Total Memory:', os.totalmem());
console.log('Home Directory:', os.homedir());
console.log('Uptime:', os.uptime());