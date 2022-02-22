// https://eth-ropsten.alchemyapi.io/v2/eFOzPDbrjsPhFR6Mi2Ckotzhc59XTE6F

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZqTQtbiEtwPuRV5Wyhhwect19hbrZIHm',
      accounts: ['17e29113185f5c8c5d7cd7926ff92bece8e26f1e95c36d6d6806e7a31b73b692'],
    },
  },
};