# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Notes/Instructions:

1. Set up environment

```npx create-react-app full-mint-website```
This creates the directory full-mint-website and creates the boilerplace files within.

```npm i -D hardhat```
Sets up blockchain dev environment use to compile, deploy, debug, and more

```npx hardhat```
Creates the necessary files in the directory

```npm i @openzeppelin/contracts```
Gives access to community standard contract tooling and boilerplace  

```npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion```
Gives access to pre-built react components for frontend UI

```npm i -D dotenv```
gives .env utility

```npm i -D @nomiclabs/hardhat-etherscan``` 
allows us to verify out contract

2. Delete unnecessary files in src:
    App.test.js
    logo.svg
    reportWebVitals.js
    setupTests.js

3. Code the smart contract

4. Get RPC URL private keys from alchemy or infura by creating a new project

5. Get API Key from etherscan under "My API Keys". Create a new one

6. Add .env variables for test network RPC URL, Etherscan key, and private key(from metamask account that will deploy the contract)

7. Deploy
```npx hardhat clean```
```npx hardhat compile```
```npx hardhat run scripts/deployZoukPunksNFT.js --network rinkeby```

8. Verify Contract
```npx hardhat verify --network rinkeby 0x9869bb79B6A0932D90205b0c0E9417Ae5e28205d```
This allows us to see the decode the contract source code on etherscan

9. Code the react site

10. Enable minting w/ the writable isMintEnabled function on etherscan

# TODO

1. Get chainlink keeper working in order to update existing NFTs
2. Create an evolution system where upgrades respect their previous evolution and re-roll attributes once they evolve
5. Get actual art
6. Create Team section
7. Create About Sections
8. Get the site on Fleek (decentralized website hosting using IPFS)
9. Deploy to Mainnet
10. Create "My NFTs" section that displays all of the wallet's owned NFTs from the collection