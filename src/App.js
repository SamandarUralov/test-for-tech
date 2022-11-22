import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "./store/userReducer";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers(5));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h2>Blog users</h2>
      {React.Children.toArray(users.map((user) => <p>{user.email}</p>))}
    </div>
  );
}

export default App;
