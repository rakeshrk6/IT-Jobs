import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Amazon from "./components/companies Jobs/Amazon";
import Internshala from "./components/companies Jobs/Internshala";
import Google from "./components/companies Jobs/Google";

function App() {
  return (
    <BrowserRouter>
      <div className="font-inter">
        <Navbar />
        <div className="flex">
          <SideMenu />
          <div className="ml-[20rem] py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/internshala" element={<Internshala />} />
              <Route path="/amazon" element={<Amazon />} />
              <Route path="/google" element={<Google />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
