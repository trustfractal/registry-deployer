# Registry deployer

This project aims to provide a simple environemnt to deploy the FractalRegistry smart contract to different chains.

## Usage

```bash
# Compile contracts
yarn compile

# Deploy contracts
yarn hardhat --network <network> deploy --root <root_address>
```

### Available networks

* `hardhat` (default) - starts a sample hardhat network that does not persist data
* `localhost` - connect to `localhost:8545` (use `yarn dev` to spin up a local network)
* ...

### Useful commands

```bash
# Clean artifacts
yarn clean 

# Test 
yarn test

# TODO: figure out gas reporting
```
