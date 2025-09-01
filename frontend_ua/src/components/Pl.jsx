import "./Pl.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import Logo from './assets/logo.jpg';
import ProgLangImg from './assets/p_l.jpg';
import PythonImg from './assets/python.jpg';
import CImg from './assets/c.jpg';
import JavaImg from './assets/java.jpg';


function Programl(){
    return(
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Master the World of Programming</h1>
                        <p>
                        Explore, learn, and excel in popular programming languages to build your future in technology.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={ ProgLangImg } alt="Programming illustration" />
                    </div>
                </div>
            </section>

            {/* Course Cards Section */}
            <section className="courses">
                <div className="course-card">
                    <img src={ PythonImg } alt="course Logo" className="course-img" />
                    <h3>Core Python</h3>
                    <p>
                        Learn Python from scratch with UpMeta. Build strong skills in syntax, logic, and real-world applications.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={ JavaImg } alt="course Logo" className="course-img" />
                    <h3>Core Java</h3>
                    <p>Advance your programming skills with UpMeta's Core Java Course.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={ CImg } alt="course Logo" className="course-img" />
                    <h3>C#</h3>
                    <p>Build a strong foundation with UpMeta's C# Course.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 4 Months</span>
                    </div>
                </div>
            </section>
            <div className="page-wrapper">         
                <footer className="site-footer">
                    <div className="footer-container">
                        <div className="footer-logo-nav">
                            <img src={Logo} alt="UpMeta Logo" />

                            <ul className="footer-nav">
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/privacy">Privacy policy</Link></li>
                            </ul>

                            <div className="footer-social">
                                <a href="https://wa.me/919003722746" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                                <a href="https://www.facebook.com/upmeta" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/upmeta_official" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/@upmeta" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.linkedin.com/company/upmeta" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="footer-columns">
                            <div className="footer-col">
                                <h3>Trending software courses</h3>
                                <ul>
                                    <li><Link to="/pl">Python Programming</Link></li>
                                    <li><Link to="/web_dev">Full Stack Development</Link></li>
                                    <li><Link to="/data-science">Data Science</Link></li>
                                    <li><Link to="/cloud_computing">AWS Cloud Computing Course</Link></li>
                                    <li><Link to="/ccna">CCNA Course</Link></li>
                                </ul>
                            </div>
                        
                            {/* Demand Courses */}
                            <div className="footer-col">
                                <h3>Demand courses</h3>
                                <ul>
                                    <li><Link to="/web_dev">C# Full Stack</Link></li>
                                    <li><Link to="/software-testing">Automation Testing</Link></li>
                                    <li><Link to="/devops">DevOps</Link></li>
                                    <li><Link to="/data_analytics">Power BI & SQL</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h3>Communication</h3>
                                <ul>
                                    <li><Link to="/spoken_english">Spoken English</Link></li>
                                    
                                </ul>
                            </div>
                        </div>                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p>Copyright © 2025 <strong>UpMeta Academy</strong>. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Programl;