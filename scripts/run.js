const main = async() =>
{    const hre = require("hardhat");
    // We get the contract to deploy
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    const cookieContract = await cookieContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),});
    await cookieContract.deployed();
    console.log("Contract addy:", cookieContract.address);
    //get the contract balance
    let contractBalance = await hre.ethers.provider.getBalance(
        cookieContract.address
      );
      console.log(
        "Contract balance:",
        hre.ethers.utils.formatEther(contractBalance)
      );
    let cookieCount;
    cookieCount= await cookieContract.getTotalCookies();
    console.log(cookieCount.toNumber());

    let  cookieTkn = await cookieContract.cookie("A simple message");
    await cookieTkn.wait();
    const [_, randomPerson] = await hre.ethers.getSigners(); 
    cookieTkn = await cookieContract.connect(randomPerson).cookie("A simple message");
contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );
    let allCookies = await cookieContract.getAllCookies();
    console.log(allCookies);

    
};

const runMain = async () =>
{
    try
    {
        await main();
        process.exit(0);
    }catch(error)
    {
        console.log(error);
        process.exit(1);
    }
    
};
runMain();