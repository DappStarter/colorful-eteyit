require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi bridge tooth guard render remain purse grace slender fringe genuine'; 
let testAccounts = [
"0xdbe24a00418e6117f2cc4d1aae397aa6ffc8e32c35736b965bce8b5a67383738",
"0x7ae08dcfa1834f38792e441e3b97ac9f389ff26403bb032a13116f6f1f5cf5ea",
"0x43e047612ba0a4943ab3863f7a3747ba2ea4c7929bb9b7481329a3fde9b99b65",
"0xfb72a92df64f1d2576dfea002c4846f0d4873a02cad382933df2ded85ad981f5",
"0xbbad3f326054e318154912db60a07dfd94ce0c5c0e014fe868ef2ddf2b769821",
"0x3abaaecaf86fc59045e524efecc5bb228971328822b06404099da6f7557a863c",
"0xa631eec1576700fbc6240d186206783ef9d0968ee7299e5f665f1acb0978cc3a",
"0xf961af511a006702f2aa239f94ad23d265198b4756b25e75677c367ca2e76cda",
"0x813cccaa0063da4d48e3374be07c584c937f45b6b4ba6d694ec70b6fc1e22e14",
"0xbf9557b1b7dd8308ae07f042cdeeb0940f27f425b112242986a550cbcf43ef4d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
