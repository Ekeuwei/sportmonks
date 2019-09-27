const profile = require('./profile.js');
const users = process.argv.slice(2);
//const users = ['chalkers', 'ekeuwei'];

users.forEach(profile.get);
//console.log(process.argv);

	
