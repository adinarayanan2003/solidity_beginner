//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;


import "./simplestorage.sol";

contract storagefactory{
    simplestorage[] public contractarray;

    function newcontract() public{
        simplestorage contracted= new simplestorage();
        contractarray.push(contracted);
    }
    
    //adding a content to a contract already created using storagefactory function
    
    function sfstore(uint256 _index,uint256 _storagenum) public {

        // pass address or ABI here
        simplestorage storagecontract=contractarray[_index];
        storagecontract.store(_storagenum);

    }

    //retrieving content from a contract already created using storagefactory function
    
    function sfget(uint256 _indexnum) public view returns(uint256){

        return contractarray[_indexnum].retrieve();
        
    }
}
