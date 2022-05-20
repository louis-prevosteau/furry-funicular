import logo from "./logo.svg";
import "./App.css";
import Posts from "./pages/posts.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/post" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
