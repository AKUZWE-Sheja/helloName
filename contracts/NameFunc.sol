// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NameFunc {
    string public name;

    constructor() public {
        name = "Ariane";
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory _newName) public {
        name = _newName;
    }
}
