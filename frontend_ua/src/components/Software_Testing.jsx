import {Link} from 'react-router-dom'
import Logo from './assets/logo.jpg'
import TestingMain from './assets/software-testing.webp';
import ManualTesting from './assets/manual-testing.jpg';
import SeleniumTesting from './assets/selenium.jpeg';
import APITesting from './assets/api-testing.jpeg';
import "./Cloud_Computing.css";

function ST_(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Software Testing</h1>
                        <p>
                            Become a skilled QA engineer by mastering manual testing, automation with Selenium, and API testing. Build a strong foundation in real-time software testing tools and methodologies.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={TestingMain} alt="Software testing illustration" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <img src={ManualTesting} alt="Manual Testing" />
                    <h3>Manual Testing</h3>
                    <p>Understand software development life cycle, testing life cycle, test cases, bug tracking, and defect reporting manually.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 2 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={SeleniumTesting} alt="Selenium Automation" />
                    <h3>Automation Testing (Selenium)</h3>
                    <p>Learn test automation using Selenium WebDriver, Java, TestNG, and frameworks for real-time project scenarios.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 2.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={APITesting} alt="API Testing" />
                    <h3>API Testing (Postman)</h3>
                    <p>Gain practical knowledge of RESTful APIs testing using Postman, collections, environments, and test scripts.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
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

export default ST_;