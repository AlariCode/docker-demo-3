const http = require('http');
const { networkInterfaces } = require('os');

const port = 3000;
const requestHandler = (request, response) => {
	const IPs = getIPs();
	response.end(JSON.stringify(IPs));
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
	if (err) {
		return console.log('Ошибка', err)
	}
	console.log(`Сервер запущен на порту ${port}`)
});

const getIPs = () => {
	const nets = networkInterfaces();
	const results = {};

	for (const name of Object.keys(nets)) {
		for (const net of nets[name]) {
			if (net.family === 'IPv4' && !net.internal) {
				if (!results[name]) {
					results[name] = [];
				}
				results[name].push(net.address);
			}
		}
	}
	return results;
}