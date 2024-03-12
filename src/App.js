import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Headers";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomeWithHeader />} />
        </Routes>
      </Router>
    </div>
  );
}

function HomeWithHeader() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
