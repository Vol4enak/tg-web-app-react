import { useTelegram } from "./сomponents/Hooks/useTelegram";
import { useEffect } from "react";
import Header from "./сomponents/Header/header";
import "./App.css";

function App() {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
