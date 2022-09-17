// import bootstrap from "bootstrap";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import ViewportProvider from "./viewport";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ViewportProvider>
        <Home />
      </ViewportProvider>
    </>
  );
}

export default App;
