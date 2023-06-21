import { useContext, useEffect } from "react";

export const Row = ({ title, handleUpdate, deleteTask }) => {
  const handleOnMouserOver = (e) => {
    setTimeout(() => {
      console.log("tooltip aparece");
    }, 3000);
  };
  return (
    <div
      onMouseOver={handleOnMouserOver}
      className="hover:scale-[1.07] flex rounded-md gap-2 p-2 items-center text-left border-b border-b-primary-color mx-3 py-3 hover:bg-slate-500 transition ease-in-out "
    >
      <input type="checkbox" className="h-4 w-4 border-x-primary-color" />
      <div className=" border-l flex-1 border-x-primary-color font-semibold ml-0.5 mr-6 pl-2 text-ellipsis overflow-hidden">
        {title}
      </div>
      {/* <div className="w-3/4 border-x border-x-primary-color font-normal pl-3 pr-40">
        {description}
      </div> */}

      <div className="flex gap-7 px-6  ">
        <button
          onClick={handleUpdate}
          className="fa-solid fa-pen-to-square text-slate-800 "
        ></button>
        <button
          className="fa-solid fa-trash text-red-600 cursor-pointer"
          onClick={deleteTask}
        ></button>
      </div>
    </div>
  );
};
