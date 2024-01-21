// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.8;

error NotEnoughToBuyCoffe();

contract BuyMeACoffe {
  struct Memo {
    address from;
    address to;
    string message;
    uint256 tip;
  }
  mapping(address => Memo[]) private _purchases;
  mapping(address => uint256) private _balances;

  function buyCoffe(address to, string memory message) public payable {
    if (msg.value <= 0) {
      revert NotEnoughToBuyCoffe();
    }
    Memo memory newMemo = Memo(msg.sender, to, message, msg.value);
    _purchases[to].push(newMemo);
  }
}
