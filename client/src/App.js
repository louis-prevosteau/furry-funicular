import "./App.css";
import NavBar from "./components/Navbar";
import Posts from "./pages/posts.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/post" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
