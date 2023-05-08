import { useState } from "react";
import SignIn from "./signIn/signIn";
import SignUp from "./signIn/signUp";
import todos from "../src/data/Todsdata"

import useTraverseTree from "./hooks/useTraverseTree"

import AllTask from "./Components/AllTask";

import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import TaskLayout from "./Components/TaskLayout";


export default function App () {
  const [todosData, settododata] = useState(todos)
  const { insertNode } = useTraverseTree()


  const handleInsertNode = (folderId, item, isMain) => {
    const finalData = insertNode(todosData, folderId, item, isMain)
    console.log(finalData)
    settododata(finalData)

  }
  const handleLoginData = () => {
   const data = localStorage.getItem('isLogin')
   
   if (data){
    return JSON.parse(localStorage.getItem('isLogin'))
   }
   else {
    return "NotloggedIn"}
  }
  const [isLogin, setIsLogin] = useState(handleLoginData());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SignIn isLogin={ isLogin } setIsLogin={ setIsLogin } /> } />
        <Route path="/alltask" element={ <TaskLayout handleInsertNode={handleInsertNode} todo={todosData} isLogin={ isLogin } /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
    </BrowserRouter>
  );
}
