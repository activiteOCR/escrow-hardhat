require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17", // Using the Solidity version from your original config
  paths: {
    artifacts: "./app/src/artifacts", // Custom path for artifacts as per your original config
  },
  // networks: {
  //   sepolia: {
  //     url: process.env.SEPOLIA_RPC_URL, // Using the environment variable for Alchemy's Sepolia RPC URL
  //     accounts: [`0x${process.env.PRIVATE_KEY}`], // Using the private key from your environment variable
  //   },
  // },
};
