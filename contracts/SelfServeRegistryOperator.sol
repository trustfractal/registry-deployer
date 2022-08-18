// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import {FractalRegistry} from "./FractalRegistry.sol";

/// @title SelfServeRegistryOperator
contract SelfServeRegistryOperator {
    FractalRegistry registry;

    constructor(address registryAddr) {
        registry = FractalRegistry(registryAddr);
    }

    function addSelf(bytes32 fractalId) external {
        registry.addUserAddress(msg.sender, fractalId);
    }

    function removeSelf() external {
        registry.removeUserAddress(msg.sender);
    }

    function addSelfToList(string memory listId) external {
        registry.addUserToList(sendersFractalId(), listId);
    }

    function removeSelfFromList(string memory listId) external {
        registry.removeUserFromList(sendersFractalId(), listId);
    }

    function sendersFractalId() internal view returns(bytes32) {
        bytes32 fractalId = registry.getFractalId(msg.sender);
        require(fractalId != 0, "Sender's address must already be in the registry. Call addSelf first.");
        return fractalId;
    }
}
