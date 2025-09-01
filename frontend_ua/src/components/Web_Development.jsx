import "./Web_Development.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import Logo from './assets/logo.jpg';
import Web_Development_ from './assets/full-stack.jpg';
import Html from './assets/html_css.jpg';
import Js from './assets/js.png';
import React_ from "./assets/react-js.jpg";
import Bootstrap from './assets/bootstrap-logo.jpeg';
import Python from './assets/python_3.jpg';
import Java from './assets/java.jpg';
import Mysql from './assets/sql_2.jpg';
import CSharp from './assets/c.jpg'; 
function Web_Development() {
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Master the World of Programming</h1>
                        <p>Explore, learn, and excel in popular programming languages to build your future in technology.</p>
                    </div>
                    <div className="hero-image">
                        <img src={Web_Development_ } alt="web-development" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <img src={Html} alt="Course Image" />
                    <h3>HTML & CSS</h3>
                    <p>Learn to structure web pages with HTML and style them beautifully using CSS. Structure and style beautiful, responsive web pages from scratch.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 2 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Js} alt="Course Image" />
                    <h3>JavaScript</h3>
                    <p>Build interactive websites using modern JavaScript. Learn DOM manipulation, events, ES6+, and more.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 1 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={React_} alt="Course Image" />
                    <h3>React.js</h3>
                    <p>Build fast, single-page apps using components, hooks, and state management...</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 1 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={ Bootstrap } alt="Course Image" />
                    <h3>Bootstrap</h3>
                    <p>Learn to empowers you to build beautiful, Design responsive websites quickly with Bootstrap’s powerful UI toolkit.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 1.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Python} alt="Course Image" />
                    <h3>Python</h3>
                    <p>Learn Python from basics to advanced with real-world scripting projects...</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Java} alt="Course Image" />
                    <h3>Java</h3>
                    <p>Advance your skills with Core Java OOP, collections, threads, and exception handling..</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>
                <div className="course-card">
                    <img src={CSharp} alt="C# Course Image" />
                    <h3>C# Programming</h3>
                    <p>
                        Master C# programming from fundamentals to advanced concepts. Build desktop and web applications using object-oriented techniques and .NET integration.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 2.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Mysql} alt="Course Image" />
                    <h3>SQL Course</h3>
                    <p>Learn relational database management with SQL. Handling Databases.....</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 1.5 Months</span>
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
<hr />
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
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p>Copyright © 2025 <strong>UpMeta Academy</strong>. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Web_Development;