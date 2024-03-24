import { signTx, encodeTransaction } from '../../src/client/txn.js';

const transaction = {
    isToEmpty: 2, // Set to 2 for address-compressed transaction
    to: "bcrt1qvfmvvxaxsh2z0r92dwthqaj6e9k69kpaa5e87j",
    data: "", // No data for a simple transfer
    nonce: 0, // Replace with sender's nonce
    gas: 2097152, // Gas limit
    gasPrice: 33554432, // Gas price
    value: 320000000n // Amount to send
};

const privateKeyInBuffer = Buffer.from('0x3f1c78a7c6c46e3d8a45b1bc29048719bff0903375cd066ccb7675ce4c77752e', 'hex');

const signedTx = signTx(transaction, privateKeyInBuffer);

const encodedTx = encodeTransaction(signedTx);

rpcClient.feed_transaction(encodedTx)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
