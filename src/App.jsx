import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Resume from './resume/Resume';
import Projects from './project/Projects';
import NotFound from './NotFound'; // Create a NotFound component for 404 errors

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 errors */}
      </Routes>
    </Router>
  );
}

export default App;
