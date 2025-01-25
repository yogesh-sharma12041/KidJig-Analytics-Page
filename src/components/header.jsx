import React from "react";

const header = () => {
  return (
<header className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 m-2">
  <h2 className="font-black text-xl sm:text-2xl">Analytics Dashboard</h2>
  <div className="bg-[#EFF6FF] w-full sm:w-auto px-4 py-2 rounded-xl flex justify-between sm:block items-center">
    <p className="text-[#929FB2] text-sm sm:text-base">Available Credits</p>
    <p className="font-bold text-lg sm:text-xl">$0.9999872</p>
  </div>
</header>

  );
};

export default header;
