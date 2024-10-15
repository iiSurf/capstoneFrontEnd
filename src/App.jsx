import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Game from './pages/Game';
// import BoxBreathing from './pages/BoxBreathing';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<Game />} />
        <Route path="/box-breathing" element={<BoxBreathing />} />
      </Routes>
    </Router>
  )
}

export default App
