async function main() {
  const [deployer] = await ethers.getSigners();

  const Portfolio = await ethers.getContractFactory("Portfolio");
  const portfolio = await Portfolio.deploy();
  //console.log("deployer : ", [deployer]);
  console.log("Portfolio deployed to : ", portfolio.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
