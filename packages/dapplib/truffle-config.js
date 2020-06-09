require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remember evil install case forget shrimp'; 
let testAccounts = [
"0xb090cad1acf4285b662ded7326c5ea2bb5cc6d483be3eba36c640f8cadd045f4",
"0x1fca33b0f84c749f5332609def656610e9582948230462b05c740a16ce5db484",
"0xf601aeddf2360ade74a45cea570d3d79fbd14efeed70ce7ec0b65361c9f3d437",
"0x45351bb8dba23cd067b65aad6290100278efd06b96ecc71357285b50263b8f97",
"0xcc4e6763c9a2d4ee430c3f1a4828e58a41f886f6c1a2ad6df4e2aa7d387c33ad",
"0xd854fe4a26641afa4d6ccef02e8f5a8f59c0926718c1c9b9dfb8044fb436db9a",
"0xdf839657896523394d034d066569a8548601700cea6323e23042687b65f830a9",
"0x1f6df2ae4294c3a6843b0fab0445805040f8fec040a874ae319f0cce551f9c58",
"0xc18312d1b90750b53b7b0b11a6237b969443311dbf88142c65a1dfd19f0b30f7",
"0x3abdc16c510e3923a30dabdfc779c35df7a57c5b1977b12813ed05c7964c536d"
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
