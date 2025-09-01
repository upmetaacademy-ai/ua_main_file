import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop.jsx';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Program_l from './pages/PL.jsx';
import Web_Develop from './pages/Web_Development.jsx';
import Data_Science_ from './pages/Data_Science.jsx';
import Data_Analyst_ from './pages/Data_Analyst.jsx';
import Ui_ux from './pages/Ui_Ux.jsx';
import Framework from './pages/Framework.jsx';
import Cloud_computing from './pages/Cloud_computing.jsx';
import Sap from './pages/Sap.jsx';
import Devopss from './pages/Devops.jsx';
import CCNA from './components/Ccna.jsx';
import Software_Testing_ from './pages/Software_Testing.jsx';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Course from './pages/Course.jsx';
import S_E from './pages/Spoken_English.jsx';
import Review from './pages/Reviews.jsx';
import Contact_2 from './pages/Contact.jsx';
import Privacy_ from './pages/Policy.jsx';

function App() {
    
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, 
  []);

  return (
    <BrowserRouter>
      <ScrollTop/> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/pl" element={<Program_l />} />
          <Route path="/web_dev" element={<Web_Develop />} />
          <Route path="/data_science" element={<Data_Science_ />} />
          <Route path="/data_analystics" element={<Data_Analyst_ />} />
          <Route path="/ui_ux" element={<Ui_ux />} />
          <Route path="/frameworks" element={<Framework />} />
          <Route path="/cloud_computing" element={<Cloud_computing />} />
          <Route path="/sap" element={<Sap />} />
          <Route path="/ccna" element={<CCNA />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/devops" element={<Devopss />} />
          <Route path="/spoken_english" element={<S_E />} />
          <Route path="/review" element={<Review />} />
          <Route path="/software-testing" element={<Software_Testing_ />} />
          <Route path="/contact" element={<Contact_2 />} />
          <Route path="/privacy" element={<Privacy_ />} />        
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
