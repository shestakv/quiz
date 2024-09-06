import { useState } from "react";
import "./App.css";
import Navbar from "../widgets/navbar/Navbar";

function App() {
  const [themes, setThemes] = useState([]);

  const getAllThemes = async () => {};

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
