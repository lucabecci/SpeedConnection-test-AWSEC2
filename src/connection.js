const NetworkSpeed = require('network-speed');  
const testNetworkSpeed = new NetworkSpeed();

async function getNetworkUploadSpeed() {
    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    };
    const fileSizeInBytes = 2000000
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    return speed.bps / 10000000;
}

async function getNetworkDownloadSpeed() {
    const baseUrl = 'http://eu.httpbin.org/stream-bytes/50000000';
    const fileSizeInBytes = 50000000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    return speed.bps / 10000000;
}

module.exports = {
    getNetworkUploadSpeed,
    getNetworkDownloadSpeed
}