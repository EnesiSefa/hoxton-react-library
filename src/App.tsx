import { useState } from "react";

import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import { Text } from "./types";
function App() {
  const [input, setInputs] = useState([{ type: "checkbox" }]);
  return (
    <div className="App">
      <Button />

      <Input />
    </div>
  );
}

export default App;
