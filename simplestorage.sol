pragma solidity ^0.8.0;


contract simplestorage{
  
  uint256 favnum;
  
  struct People{
    uint256 favnum;
    string name;
  
  }
  
  People[] public parray;
  
  mapping(string => uint256) public nameToFavoriteNumber;
  
  function store(uint256 _favnum) public{
      
      favnum=_favnum;
    
  }
  
  function retrieve() public view returns(uint256){
    return favnum;
  }
  
  function addperson(string memory _name,uint256 _favnum) public {
    parray.push(People(_favnum,_name));
    nameToFavoriteNumber[_name]=_favnum;
  
  }


}
