const crypto = require('crypto');
const fs = require('fs');

const publicKey = fs.readFileSync('./certs/publicKey.pem', 'utf-8');

const signature = fs.readFileSync('./signature');
const message = fs.readFileSync('./textToSign.txt');

const verifier = crypto.createVerify('sha256');
verifier.update(message);
verifier.end();

const verified = verifier.verify(publicKey, signature);

console.log(JSON.stringify({
  verified,
}, null, 2));
