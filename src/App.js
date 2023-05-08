import { useState } from "react";
import SignIn from "./signIn/signIn";
import SignUp from "./signIn/signUp";

import AllTask from "./Components/AllTask";
import Header from "./Components/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";

export const AppRoute = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <SignIn/>,
  
  }, {
    path: "/alltask",
    element: <AllTask />
  }, {
    path: "/signup",
    element: <SignUp />
  }]
}])
export default function App () {

  
  return (
    <div className="App">
      <Header />
      
      <Outlet/>

      



    </div>
  );
}
