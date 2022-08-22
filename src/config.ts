import dotenv from "dotenv";

dotenv.config();

export const config : Record<string, any> = {
  MUMBAI_POLYGONSCAN_API_URL: process.env.MUMBAI_POLYGONSCAN_API_URL,
  MUMBAI_POLYGONSCAN_API_KEY: process.env.MUMBAI_POLYGONSCAN_API_KEY,
  MUMBAI_DEPLOYER_PRIVATE_KEY: process.env.MUMBAI_DEPLOYER_PRIVATE_KEY,
  MUMBAI_DEPLOYER_ADDRESS: process.env.MUMBAI_DEPLOYER_ADDRESS,
  MUMBAI_RPC_URL: process.env.MUMBAI_RPC_URL,

  POLYGON_POLYGONSCAN_API_URL: process.env.POLYGON_POLYGONSCAN_API_URL,
  POLYGON_POLYGONSCAN_API_KEY: process.env.POLYGON_POLYGONSCAN_API_KEY,
  POLYGON_DEPLOYER_PRIVATE_KEY: process.env.POLYGON_DEPLOYER_PRIVATE_KEY,
  POLYGON_DEPLOYER_ADDRESS: process.env.POLYGON_DEPLOYER_ADDRESS,
  POLYGON_RPC_URL: process.env.POLYGON_RPC_URL,

  GOERLI_RPC_URL: process.env.GOERLI_RPC_URL,
  GOERLI_ETHERSCAN_API_URL: process.env.GOERLI_ETHERSCAN_API_URL,
  GOERLI_ETHERSCAN_API_KEY: process.env.GOERLI_ETHERSCAN_API_KEY,
  GOERLI_DEPLOYER_PRIVATE_KEY: process.env.GOERLI_DEPLOYER_PRIVATE_KEY,
  GOERLI_DEPLOYER_ADDRESS: process.env.GOERLI_DEPLOYER_ADDRESS,

  // env vars will be converted to strings so this is the best (quick)
  // way to check boolean values
  AUTOMINE: process.env.AUTOMINE === "true" || process.env.AUTOMINE === "1",
  REPORT_GAS: process.env.REPORT_GAS === "true" || process.env.REPORT_GAS === "1",
};

export default config;
