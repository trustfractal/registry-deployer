# DID Registry deployer

This project contains the Fractal DID Registry smart contract as well as a simple environment to deploy it to different chains.  
It contains 2 smart contracts:
1. FractalRegistry.sol - This is the DID Registry contract used to deploy on EVM chains.
2. SelfServeRegistryOperator.sol - This is "backoffice" control used in the DID Registry demo. You can find the demo [here](https://did-registry.demo.fractal.id/) and the code [here](https://github.com/trustfractal/did-registry-demo-dapp).

For more information about Fractal's products, go [here](https://fractal.notion.site/Fractal-Product-Overview-2c63841aebaf4000b96f1c44c1680ad1).

<br/>
<br/>

##  DID Registry Overview
___
Fractal's DID Registry enables you to verify the credentials associated with a wallet address in your smart contract (on-chain) or in your dApp.  The DID Registry is a smart contract that contains two public methods your dApp and smart contract can call to verify a credential. Registries are deployed on Karura, Avalanche, Gnosis (soon),  Aurora (soon) and Polygon. Registries will be deployed on other chains on a demand basis.

In order to verify a credential, you call `getFractalId()` to get a `fractalId` associated with a wallet address. Every `fractalId` in the DID Registry corresponds to a unique human. You call `isUserInList()` to determine whether a fractalId exists in one of the Registry's maintained lists. Lists are currently maintained for KYC level, citizenship and residency.

1. Users connect their wallet.
2. Look up their KYC status of their address in the DID Registry.
3. Your smart contracts can look up the transaction sender in the DID Registry to inform decisions.

![did-registry-lookup](https://user-images.githubusercontent.com/365821/166981861-3966c717-ffcc-4162-b6f0-5dd9e0ac4a76.png)


For more information about the DID Registry, go [here](https://docs.developer.fractal.id/fractal-did-registry).

### Interface

A unique human has a unique Fractal ID, each with 1+ addresses and present in 0+ lists.

```
address [*]---[1] fractalId [*]---[*] listId
```

#### Getting the Fractal ID for an address

```solidity
bytes32 fractalId = getFractalId(address walletAddress);
```

#### Looking for a Fractal ID in a list

```solidity
bool presence = isUserInList(bytes32 fractaId, string listId);
```
<br/>
<br/>


## Simple Deployment Environment
___
### Setup

Copy `.env.example` to `.env` and change accordingly.

### Usage

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

