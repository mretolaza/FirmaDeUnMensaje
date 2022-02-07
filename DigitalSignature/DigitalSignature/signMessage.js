const crypto = require('crypto');
const fs = require('fs');

const privateKey = fs.readFileSync('certs/privateKey.pem', 'utf-8');

const message = fs.readFileSync('./textToSign.txt');

// Signing
const signer = crypto.createSign('sha256');
signer.update(message);
signer.end();

const signature = signer.sign(privateKey);
const signatureHex = signature.toString('hex');

fs.writeFileSync('./signature', signature);
console.log(`Digital Signature: ${signatureHex}`);
