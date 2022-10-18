import Layout from "./layout/main/Layout";
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Place from "./pages/Place/Place";
import Acivity from "./pages/Acivity";
import Event from "./pages/Event";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="places" element={<Place />} />
          <Route path="events" element={<Event />} />
          <Route path="activities" element={<Acivity />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
