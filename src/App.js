// import Infinite from "./page/Infinite";
// import List from "./page/pagination/List";
// import UseRef from "./page/useRef/useRef";
// import UseRefDom from "./page/useRef/UseRefDom";
import { useState } from "react";
import UseContext from "./page/useContext/UseContext";
import { ThemeContext } from "./page/useContext/context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <UseContext />
        {/* <Infinite /> */}
        {/* <List /> */}
        {/* <UseRef /> */}
        {/* <UseRefDom /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
