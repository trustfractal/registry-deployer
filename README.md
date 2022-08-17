# Registry deployer

This project aims to provide a simple environment to deploy the FractalRegistry smart contract to different chains.

## Setup

Copy `.env.example` to `.env` and change accordingly.

## Usage

```bash
# Compile contracts
yarn compile

# Deploy FractalRegistry
yarn hardhat --network <network> deploy:registry <root_address> [--delegates <comma-separated address list>]

# Deploy PolytradeProxy
yarn hardhat --network <network> deploy:polytrade

# Add delegates
yarn hardhat --network <network> add-delegates <comma-separated address list>
```

### Available networks

* `hardhat` (default) - starts a sample hardhat network that does not persist data
* `localhost` - connect to `localhost:8545` (use `yarn dev` to spin up a local network)
* `mumbai` - Polygon testnet
* ...

### Useful commands

```bash
# Clean artifacts
yarn clean

# Test
yarn test

# Verify contract (requires etherscan configuration)
yarn hardhat --network <network> etherscan-verify

# TODO: figure out gas reporting
```
