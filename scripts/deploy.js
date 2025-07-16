const main = async() =>
{
   
    const cookieContractFactory = await hre.ethers.getContractFactory("CookiePortal");
    const cookieContract = await cookieContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.001"),
      });

    await cookieContract.deployed();
           

    console.log("CookiePortal Address :", cookieContract.address);
    
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