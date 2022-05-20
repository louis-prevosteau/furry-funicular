import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Posts from "./pages/posts.js";
import Login from "./components/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <span className="page" />
      <Routes>
        <Route path="/" element={<Posts/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/post" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
