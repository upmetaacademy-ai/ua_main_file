import './Framework.css'
import Django from "./assets/django-framework.jpg"
import SpringBoot from './assets/spring-boot.jpeg'
import Dj_Spring from './assets/Framework.jpg'
import {Link} from 'react-router-dom'
import Logo from './assets/logo.jpg'
import DotNet from './assets/.net.jpg';

function Framework_(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Frameworks</h1>
                        <p>
                            Master powerful frameworks used in modern development. Build scalable web applications with industry-standard tools.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={Dj_Spring} alt="Frameworks illustration" />
                    </div>
                </div>
            </section>

            {/* Framework Cards Section */}
            <section className="courses">
                <div className="course-card">
                    <img src={Django} alt="Django Logo" className="course-img" />
                    <h3>Django Framework</h3>
                    <p>
                        Learn Django with UpMeta to build secure, scalable web applications using Python. Ideal for backend developers.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 1.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={SpringBoot} alt="Spring Boot Logo" className="course-img" />
                    <h3>Spring Boot Framework</h3>
                    <p>
                        Master Spring Boot and build powerful Java-based enterprise applications with ease and efficiency.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 2 Months</span>
                    </div>
                </div>
                <div className="course-card">
                    <img src={DotNet} alt=".NET Framework Logo" className="course-img" />
                    <h3>.NET Framework</h3>
                    <p>
                        Learn to build robust desktop and web applications using the .NET Framework. Ideal for developers aiming to master C#, ASP.NET, and database integration.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 2 Months</span>
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

export default Framework_;