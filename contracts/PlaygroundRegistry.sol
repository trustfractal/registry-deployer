// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import {FractalRegistry} from "./FractalRegistry.sol";

/// @title PlaygroundRegistry
/// This contract is a FractalRegistry that's intentded for non-production
/// usage. The main motivation of creating this seemingly redundant concept is
/// to deploy it on chains where the mainnet exhibits a sufficiently different
/// behavior from its testnets.
contract PlaygroundRegistry is FractalRegistry {
    constructor(address _root) FractalRegistry(_root) {}
}
