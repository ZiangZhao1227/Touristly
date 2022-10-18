import Layout from "./layout/main/Layout";
import Home from "./pages/Home";
// react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
