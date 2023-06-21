import { useTodoContext } from "../../Context/TodoContext";
import { Api } from "../../api";
import { Button } from "../Button";
import { Input } from "../Input";

export const Form = () => {
  const { task, setTask, isUpdating, saveTask } = useTodoContext();

  return (
    <div className="flex w-full justify-center items-end p-6 gap-2 h-[30%] font-bold text-white">
      <Input
        value={task.title}
        onChange={(event) => setTask({ ...task, title: event.target.value })} //começa no evento atualizando o input e dando valor para o newtask
      />
      {/* componentes controlaveis */}
      <Button onClick={saveTask}>
        {isUpdating.state ? "Save Task" : "Add Task"}
      </Button>
    </div>
  );
};
