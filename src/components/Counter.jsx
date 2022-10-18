import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter  flex  text-2xl justify-between gap-3">
      Quantity
      <div className="w-[124px] shadow-md flex justify-between">
        <div className="bg-white text-textColor w-8 flex flex-1 items-center justify-center rounded-l-lg cursor-pointer">
          <button>-</button>
        </div>
        <div className="w-8 flex flex-1 items-center justify-center  ">
          {count}
        </div>
        <div className="bg-white flex-1 text-textColor w-8 flex items-center justify-center overflow-hidden rounded-r-lg cursor-pointer">
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
