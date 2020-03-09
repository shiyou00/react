import React from 'react';

function WillError() {
  const dataList = [
    {
      obj:{
        name:"jack"
      },
      age:18
    }
  ];
  const handleClick = ()=>{
    throw "发生错误";
  };
  return (
    <ul>
      {
        dataList.map((item,index)=>{
          return (
            <li key={index} onClick={handleClick}>{item.obj.name} - {item.age}</li>
          )
        })
      }
    </ul>
  );
}

export default WillError;
