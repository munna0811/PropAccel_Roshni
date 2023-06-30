import Mains from "./component/Mains";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mains />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
