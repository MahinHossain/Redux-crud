import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowData from "./component/ShowData";
import From from "./component/Form";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <div>
      <From />
      <ShowData />
    </div>
  );
}

export default App;
