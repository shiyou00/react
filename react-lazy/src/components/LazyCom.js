import React from 'react';

function LazyCom() {

  const handleClick = ()=>{
    // eslint-disable-next-line
    throw "发生错误";
  };

  return (
    <div onClick={handleClick}>
      LazyCom
    </div>
  );
}

export default LazyCom;
