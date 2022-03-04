pragma solidity ^0.4.7;

contract inbox{
    
    string public msg;

    function inbox(string msg1) public{

        msg=msg1;

    }

    function setmessage(string msg2) public{
        msg=msg2;
    }

    function getmsg() public view returns(string){

        return msg;

    }
}
