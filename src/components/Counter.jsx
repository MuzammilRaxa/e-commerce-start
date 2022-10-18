import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    
      <div className="counter flex  text-2xl justify-between gap-3">
        Quantity
        <div className="w-[124px] shadow-md flex justify-between">
          <div className="bg-[#8a4af3] text-white w-8 flex flex-1 items-center justify-center rounded-l-lg cursor-pointer">
            <button>-</button>
          </div>
          <div className="w-8 flex flex-1 items-center justify-center border-t border-b border-[#8a4af3]">
            {count}
          </div>
          <div className="bg-[#8a4af3] flex-1 text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
            <button>+</button>
          </div>
        </div>
      </div>
    
  );
}

export default Counter;
