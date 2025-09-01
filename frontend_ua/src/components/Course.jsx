import './Course.css'
import {Link} from 'react-router-dom'
import Logo from './assets/logo.jpg'
import Course from './assets/course.jpg'


function Course_(){
    return(
        <div className='course'>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Learn from experts, master new skills</h1>
                        <p>
                            Join us to gain in-demand skills and hands-on expertise that drive your
                            career forward.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={Course} alt="Team learning together" />
                    </div>
                </div>
                </section>

                {/* Course Categories */}
            <section className="categories">
                <div className="category">
                    <i className="icon">&lt;/&gt;</i>
                    <h3>
                        <Link to="/pl">Programming Language</Link>
                    </h3>
                    <p>
                        Learn various programming languages with Urancode's expert-led courses.
                    </p>
                    <Link className="badge red" to="/pl">3 Courses</Link>
                </div>
                <div className="category" >
                    <i className="icon">&gt;_</i>
                    <h3>
                        <Link to="/web_dev">Full Stack Development</Link>
                    </h3>
                    <p>
                        Build dynamic websites and web apps with UpMeta Academy Web Development training.
                    </p>
                    <Link to="/web_dev" className="badge red">7 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">🖥️</i>
                    <h3>
                        <Link to="/ui_ux">UI/UX</Link>
                    </h3>
                    <p>
                        Design intuitive interfaces and enhance user experiences with UI/UX courses.
                    </p>
                   
                    <Link className="badge red" to="/ui_ux">4 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">📊</i>
                    <h3>
                        <Link to="/data_analystics">Data Analystics</Link>
                    </h3>
                    <p>
                        Discover insights and make data-driven decisions with analytics courses.
                    </p>
                    <Link className="badge red" to="/data_analystics">5 Courses</Link>
                </div>
                
                <div className="category">
                    <i className="icon">📈</i>
                    <h3>
                        <Link to="/data_science">Data Science</Link>
                    </h3>
                    <p>
                        Master data science with in-depth training on stats and machine learning.
                    </p>
                    <Link  className="badge yellow" to="/data_science">4 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">🗄️</i>
                    <h3>
                        <Link to="/frameworks">Frameworks</Link>
                    </h3>
                    <p>Learn framework with expert-led courses.</p>
                    <Link className="badge blue" to="/frameworks">3 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">☁️</i>
                    <h3>
                        <Link to="/cloud-computing">Cloud Computing</Link>
                    </h3>
                    <p>Learn cloud platforms and services with expert-led courses.</p>
                    <Link className="badge blue" to="/cloud_computing">3 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">🏢</i>
                    <h3>
                        <Link to="/sap-technologies">SAP Technologies</Link>
                    </h3>
                    <p>Master SAP modules like FICO, ABAP, and HANA with expert guidance.</p>
                    <Link className="badge blue" to="/sap">3 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">⚙️</i>
                    <h3>
                        <Link to="/devops">DevOps</Link>
                    </h3>
                    <p>
                        Master DevOps tools and practices like CI/CD, Docker, Jenkins, and Kubernetes.
                    </p>
                    <Link className="badge orange" to="/devops">3 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">🌐</i>
                    <h3>
                        <Link to="/ccna">CCNA</Link>
                    </h3>
                    <p>
                        Learn networking fundamentals, routing, switching, and prepare for the Cisco CCNA certification.
                    </p>
                    <Link className="badge orange" to="/ccna">1 Course</Link>
                </div>
                <div className="category">
                    <i className="icon">🧪</i>
                    <h3>
                        <Link to="/software-testing">Software Testing</Link>
                    </h3>
                    <p>
                        Learn manual and automation testing techniques including Selenium, TestNG, JUnit, and real-time testing tools.
                    </p>
                    <Link className="badge orange" to="/software-testing">2 Courses</Link>
                </div>
                <div className="category">
                    <i className="icon">🗣️</i>
                    <h3>
                        <Link to="/spoken_english">Spoken English</Link>
                    </h3>
                    <p>
                        Improve fluency, grammar, and confidence in English communication for personal and professional growth.
                    </p>
                    <Link className="badge green" to="/spoken_english">6 Courses</Link>
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
                                    <li><Link to="/data_science">Data Science</Link></li>
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
                                    <li><Link to="/data_analystics">Power BI & SQL</Link></li>
                                    
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
        </div>
    );
}

export default Course_;