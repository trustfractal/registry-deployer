import dotenv from "dotenv";

dotenv.config();

export const config : Record<string, any> = {
  MUMBAI_LEDGER_ADDRESS: process.env.MUMBAI_LEDGER_ADDRESS,
  MUMBAI_POLYGONSCAN_API_URL: process.env.MUMBAI_POLYGONSCAN_API_URL,
  MUMBAI_POLYGONSCAN_API_KEY: process.env.MUMBAI_POLYGONSCAN_API_KEY,
  MUMBAI_ROOT_PRIVATE_KEY: process.env.MUMBAI_ROOT_PRIVATE_KEY,
  MUMBAI_ROOT_ADDRESS: process.env.MUMBAI_ROOT_ADDRESS,
  MUMBAI_RPC_URL: process.env.MUMBAI_RPC_URL,
  REPORT_GAS: process.env.REPORT_GAS || false,
};

export default config;
