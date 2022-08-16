//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract FeelTheMatchToken is ERC20PresetMinterPauser {

    event FTMTLog(string func, address sender, uint val, bytes data);

    /**
   * @dev ERC20 constructor.
   * Contract deployer account address already has admin, minter and pauser roles
   * Arguments passed to the constructor can be any other desired address
   */
    constructor(
        uint256 initialSupply, 
        address admin, 
        address minter, 
        address pauser
        ) 
        ERC20PresetMinterPauser("Feel The Match Token", "FTMT")
        {
        _grantRole(DEFAULT_ADMIN_ROLE, admin);
        _grantRole(MINTER_ROLE, minter);
        _grantRole(PAUSER_ROLE, pauser);
        //Initial supply mint goes into the contract deployer account address
        _mint(msg.sender, initialSupply);
    }

    /**
   * @dev ERC20 balance decimals.
   * In most cases, stable coin's decimals are used as ticker
   * in trades & exchanges. Benchmarks shows that 6 decimals is
   * a good choice for FIAT backed tokens.
   */
    function decimals() public view virtual override returns (uint8) {
        return 6;
    }

    
    /**
   * @dev Fallback function.
   * called when no other function matches the contract invocation
   * this disables ETH direct sending transactions
   */
    fallback() payable external {
        emit FTMTLog("fallback()", _msgSender(), msg.value, _msgData());
        revert();
    }
}