import { Row } from "../Row";
import { ListHeader } from "../ListHeader";
import React from "react";
import { useTodoContext } from "../../Context/TodoContext";
import { PacmanLoader } from "react-spinners";

export function List() {
  const { list, handleUpdate, deleteTask, loading } = useTodoContext();
  return (
    <div className="flex flex-col-reverse flex-1 p-2 w-full overflow-y-scroll no-scrollbar ">
      {/* <ListHeader /> */}
      {loading ? (
        <div className="flex w-full h-full justify-center items-center">
          <PacmanLoader color="#6C83BC" />
        </div>
      ) : (
        list.map((item, index) => {
          return (
            <Row
              key={item.id}
              title={item.title}
              deleteTask={() => deleteTask(item.id)}
              handleUpdate={() => handleUpdate(index)}
            />
          );
        })
      )}
    </div>
  );
}
