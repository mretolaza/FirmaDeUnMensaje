const crypto = require('crypto');
const fs = require('fs');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

fs.writeFileSync('./certs/publicKey.pem', publicKey.export({
  type: 'pkcs1',
  format: 'pem',
}));

fs.writeFileSync('./certs/privateKey.pem', privateKey.export({
  type: 'pkcs1',
  format: 'pem',
}));
