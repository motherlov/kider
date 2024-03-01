import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './Component/Cms/Home/Home';
import Navbar from './Component/ShareModule/Navbar/Navbar';
import Footer from './Component/ShareModule/Footer/Footer';
import About from './Component/Cms/About/About';
import Contact from './Component/Cms/Contact/Contact';
import Classes from './Component/Cms/Classes/Classes';
import NotFound_404 from './Component/Cms/404/NotFound_404';
import Appointment from './Component/Cms/Appointment/Appointment';
import Testimonial from './Component/Cms/Testimonial/Testimonial';
import Teachers from './Component/Cms/Teachers/Teachers';
import Facility from './Component/Cms/Facility/Facility';
import Team from './Component/Cms/Team/Team';
import Login from './Component/Auth/Login/Login';
import Registration from './Component/Auth/Registration/Registration';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MultiStepRegistration from './Component/MultiStepRegistration/MultiStepRegistration';
import CourseApply from './Component/Cms/CourseApply/CourseApply';
function App() {

  // const token =localStorage.getItem("token") || sessionStorage.getItem("token");
  // const location = useLocation();
  // let fullURL = `${location.pathname}`;
  // if (fullURL.startsWith("/")) {
  //   fullURL = fullURL.substring(1);
  // }


  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='*' element={<NotFound_404/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/course/apply/:id' element={<CourseApply/>} />
        <Route path='/teachers' element={<Teachers/>} />
        <Route path='/facility' element={<Facility/>} />
        <Route path='/multipleRegistration' element={<MultiStepRegistration/>} />
        {/* <Route path='/course' element={<Facility/>} /> */}
        <Route path='/team' element={<Team/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
