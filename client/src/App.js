import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/posts.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <Posts />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<h1>TEST</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
