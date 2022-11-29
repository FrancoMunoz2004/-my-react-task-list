import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Nav from "./nav";
import Home from "./components/Home";
import About from "./About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Nav />
        </>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Tarea" element={<About/>}></Route>
            <Route path="/SobreNosotros" element={<Contact />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
