// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasTracker {
    uint256 public gasPrice;

    function updateGasPrice(uint256 _gasPrice) public {
        gasPrice = _gasPrice;
    }

    function getGasPrice() public view returns (uint256) {
        return gasPrice;
    }
}
