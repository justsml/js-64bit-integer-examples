var os = require('os');
module.exports = {
	type: os.type(),
	platform: os.platform(),
	arch: os.arch(),
	release: os.release(),
	loadavg: os.loadavg(),
	cpus: os.cpus().length,
	freemem: os.freemem(),
	totalmem: os.totalmem()
}
