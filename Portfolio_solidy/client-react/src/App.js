import "./App.css";
import Layout from "./components/Layout";
import Wallet from "./components/wallet/Wallet";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import AddSkills from "./pages/addSkills/AddSkills";
import AddProjects from "./pages/addProjects/AddProjects";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const saveState = (state) => {
    console.log("save", state);
    setState(state);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Wallet saveState={saveState} />

        <Routes>
          <Route path="/" element={<Hero state={state} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Skills state={state} />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/addSkills"
            element={<AddSkills state={state} />}
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Projects state={state} />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/addProjects"
            element={<AddProjects state={state} />}
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
