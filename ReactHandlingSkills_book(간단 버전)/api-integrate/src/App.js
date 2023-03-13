import React from "react";
import Users from "./Users.js";
import { UserProvider } from "./UsersContext.js";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
