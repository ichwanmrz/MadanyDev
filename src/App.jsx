// import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import Registration from './components/Registration';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <Router>
      <div>
        {/* <Home/> */}
      <Header />
        <Routes>
        <Route exact path="/MadanyDev" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses/:id" element={<CourseDetails/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/profile" element={<UserProfile/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
