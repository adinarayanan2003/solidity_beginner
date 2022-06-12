//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "./simplestorage.sol";

contract extrastorage is simplestorage{

    //add virtual to host function before overriding

    function store(uint256 _favnum) public override {

        favnum=_favnum+5;
    }
}
