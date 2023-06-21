import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Api } from "../api";

export const TodoContext = createContext(null); // 1 - Criei o Context

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  try {
    if (context) {
      return context;
    } else {
      throw new Error("This context has no provider!");
    }
  } catch (error) {
    console.log(error);
  }
};

//2 - CRIAR UMA FUNCTION PROVIDER (CHILDREN É COMPONENTE QUE O PROVIDER VAI ENVOLVER)
export const TodoProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({ title: "" });
  const [isUpdating, setIsUpdating] = useState({ state: false, index: null });

  const getList = useCallback(async () => {
    const response = await Api.getList();
    setList(response);
  }, [Api]);

  useEffect(() => {
    setLoading(true);
    getList();
    setLoading(false);
  }, [getList]);

  const saveTask = async () => {
    if (task.title) {
      if (isUpdating.state) {
        updateTask();
      } else {
        const response = await Api.createTask(task);
        if (response.status === 201) {
          getList();
          setTask({ title: "" });
        }
      }
    } else return null;
  };

  const deleteTask = async (id) => {
    const response = await Api.deleteTask(id);
    if (response.status === 200) {
      setTask({ title: "" });
      setIsUpdating({ state: false, index: null });
      getList();
    }
  };

  const updateTask = async () => {
    const response = await Api.updatingTask(task);
    if (response.status === 200) {
      getList();
      setTask({ title: "" });
      setIsUpdating({ state: false, index: null });
    }
  };

  const handleUpdate = (index) => {
    setIsUpdating({ state: true, index });
    setTask(list[index]);
  };

  return (
    <TodoContext.Provider
      value={{
        list,
        task,
        loading,
        setList,
        setTask,
        isUpdating,
        saveTask,
        deleteTask,
        updateTask,
        handleUpdate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
