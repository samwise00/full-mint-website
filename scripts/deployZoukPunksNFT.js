const hre = require("hardhat");

const BASE_URI = 'ipfs://QmXKjE4mx3LgqgSuM4u9C2vzGB6Gv3RUVK9yAywh3ScZTc/';

async function main() {
  const ZoukPunksNFT = await hre.ethers.getContractFactory("ZoukPunksNFT");
  const zoukPunksNFT = await ZoukPunksNFT.deploy(BASE_URI);

  await zoukPunksNFT.deployed();

  console.log("ZoukPunks deployed to:", zoukPunksNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
