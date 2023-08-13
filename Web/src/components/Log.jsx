import React from 'react'

const Log = (containerNum) => {
    console.log(containerNum);
    const data = containerNum.containerNum;
  return (
    <div>
      <ul>
        <li>Box Id -{data._id.slice(0, 6)}...</li>
        <li>Box Price{data.price}</li>
        <li>Box Volume{data.volume}</li>
        <li>Box Weight{data.weight}</li>
      </ul>
    </div>
  );
}

export default Log
