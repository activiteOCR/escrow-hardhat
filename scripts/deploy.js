const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Escrow = await hre.ethers.getContractFactory("Escrow");
  // Replace the addresses below with actual addresses
  const arbiterAddress = "0x9Dad86d6FFfa669Af46a65A42d419cA8f80e10F8";
  const beneficiaryAddress = "0xae93d85EAe1E949344F531aa6af389048C6B398C";

  const escrow = await Escrow.deploy(arbiterAddress, beneficiaryAddress, {
    value: hre.ethers.utils.parseEther("0.0001"),
  });

  await escrow.deployed();

  console.log("Escrow deployed to:", escrow.address);
  console.log("Deployed by:", deployer.address);
  console.log("Arbiter:", arbiterAddress);
  console.log("Beneficiary:", beneficiaryAddress);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
