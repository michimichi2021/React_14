import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <p>好きな季節を選んでください</p>
      <p>{value}</p>
      <button onClick={() => setValue("春")}>春</button>
      <button onClick={() => setValue("夏")}>夏</button>
      <button onClick={() => setValue("秋")}>秋</button>
      <button onClick={() => setValue("冬")}>冬</button>
    </div>
  );
}
