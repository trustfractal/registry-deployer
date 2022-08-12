// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import {FractalRegistry} from "./FractalRegistry.sol";

/// @title Polytrade proxy
contract PolytradeProxy {
    FractalRegistry registry;
    string kycLevel;

    constructor(address _registryAddr, string memory _kycLevel) {
        registry = FractalRegistry(_registryAddr);
        kycLevel = _kycLevel;
    }

    function hasPassedKYC(address addr) public view returns (bool) {
        return registry.isUserInList(registry.getFractalId(addr), kycLevel);
    }
}
