pragma solidity ^0.8.12;

import "./account.sol";

contract AccountFactory {

    function createAccount(address owner) external returns(address) {
        Account acc = new Account(owner);
        return address(acc);
    }
}