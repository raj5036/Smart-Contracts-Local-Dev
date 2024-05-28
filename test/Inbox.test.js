const ganache = require('ganache');
const { Web3 } = require('web3');
const assert = require('assert')

// updated ganache and web3 imports added for convenience
const web3 = new Web3(ganache.Provider())

// contract test code will go here
