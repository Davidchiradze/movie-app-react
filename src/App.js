import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthorizedComponent from "./components/AuthorizedComponent";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login users={users} />}></Route>
        <Route
          path="/register"
          element={<Register users={users} setUsers={setUsers} />}
        ></Route>
        <Route path="/*" element={<AuthorizedComponent />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
