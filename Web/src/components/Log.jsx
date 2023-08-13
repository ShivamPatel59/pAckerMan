import React from 'react'

const Log = (containerNum) => {
    console.log(containerNum);
    const data = containerNum.containerNum;
  return (
    <div>
      <h1>{data._id.slice(0,6)}...</h1>
      <h1>{data.price}</h1>
      <h1>{data.volume}</h1>
      <h1>{data.weight}</h1>
    </div>
  );
}

export default Log
