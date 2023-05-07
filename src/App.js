import { useState } from "react";

import todos from "./data/Todsdata";
import AllTask from "./Components/AllTask";
import useTraverseTree from "./hooks/useTraverseTree";

export default function App() {
  const[todoData , setTododata] =useState(todos)
  const {insertNode} = useTraverseTree()

  const handleInsertNode = (folderId, item, isMain) => {
    const finalData = insertNode(todoData, folderId, item, isMain)
    console.log(finalData)
    setTododata(finalData)
  }
  return (
    <div className="App">
      <AllTask handleInserNode ={handleInsertNode} todo = {todoData}/>
      
    </div>
  );
}
