import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + Zarah</h1>
            <div className="card">
              <button
                onClick={() => {
                  setCount(count + 1);
                  navigate("/test/oii");
                }}
              >
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        }
      />

      <Route
        path="/test"
        element={<h1>Hello world this is the test page</h1>}
      />
    </Routes>
  );
}

export default App;
