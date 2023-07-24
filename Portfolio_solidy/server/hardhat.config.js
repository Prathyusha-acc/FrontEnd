//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  // paths: {
  //   artifacts: "../client/src/artifacts",
  // },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/qEA1Af-aJRsixpOiy4qLtDiQTxGg_kfD`,
      accounts: [
        `38d0e9498c95d05fcf85da5f9015b6b57b3104bab8f3e16465f48d47777ed98e`,
      ],
    },
  },
};
