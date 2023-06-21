import React from "react";

export function ListHeader() {
  return (
    <div className=" flex items-center text-left rounded-lg text-white bg-primary-color mt-8 mx-6 py-3">
      <input
        type="checkbox"
        className=" h-5 w-5 mx-3  border-x-primary-color"
      />
      <div className="w-1/4 border-l border-x-white font-normal pl-3 pr-20">
        Title
      </div>
    </div>
  );
}
