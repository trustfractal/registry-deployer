// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import {FractalRegistry} from "./FractalRegistry.sol";

/// @title SelfServeRegistryOperator
contract SelfServeRegistryOperator {
    FractalRegistry registry;

    constructor(address registryAddr) {
        registry = FractalRegistry(registryAddr);
    }

    function addSelf(bytes32 fractalId) public {
        registry.addUserAddress(msg.sender, fractalId);
    }

    function removeSelf() public {
        registry.removeUserAddress(msg.sender);
    }

    function addSelfToList(string memory listId) public {
        registry.addUserToList(sendersFractalId(), listId);
    }

    function removeSelfFromList(string memory listId) public {
        registry.removeUserFromList(sendersFractalId(), listId);
    }

    function sendersFractalId() internal view returns(bytes32) {
        bytes32 fractalId = registry.getFractalId(msg.sender);
        require(fractalId != 0, "Sender's address must already be in the registry. Call addSelf first.");
        return fractalId;
    }

    function addSelfToRegistry(bytes32 fractalId, string memory listId) external {
        addSelf(fractalId);
        addSelfToList(listId);
    }

    function removeSelfFromRegistry(string memory listId) external {
        removeSelfFromList(listId);
        removeSelf();
    }
}
