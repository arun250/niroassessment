import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/docter/:id" element={<ProfilePage />} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
