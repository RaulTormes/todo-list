import { Input } from "./Input";
import { TextArea } from "../TextArea";
import { Button } from "./Button";
import { Tableheader } from "./TableHeader";
import { Row } from "../Row";
import { useState } from "react";

export const Main = () => {
  function AddTask() {
    return true;
  }
  return (
    <main className="flex min-h-[79%]">
      <div className="flex flex-col ml-6 pr-2 w-[30%] border-r border-r-primary-color">
        <Input />
        <TextArea />
        <Button onClick={(event) => event.target.value} />
      </div>
      <div className="flex flex-col w-[70%]">
        <Tableheader />
        <Row value={false} />
      </div>
    </main>
  );
};
