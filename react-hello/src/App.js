import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HelloPage from "./components/pages/HelloPage";
import WorldPage from "./components/pages/WorldPage";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/world" element={<WorldPage />} />
      </Routes>
    </Router>
  );
}
export default App;
