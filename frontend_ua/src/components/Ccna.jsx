import "./Cloud_Computing.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import Logo from './assets/logo.jpg';
import Network from './assets/ccna.jpg'

function CCNA() {
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>CCNA & Networking Fundamentals</h1>
                        <p>
                            Master the core networking concepts like IP addressing, routing, switching, and get certified with Cisco Certified Network Associate (CCNA).
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={Network} alt="Networking illustration" />
                    </div>
                </div>
            </section>

            
            <section className="courses">
                <div className="course-card">
                    <h3>CCNA Certification</h3>
                    <p>
                        Build a strong foundation in networking through Cisco’s CCNA certification. Learn the essentials of network fundamentals, routing, switching, IP addressing, and subnetting from expert trainers.
                    </p>
                    <ul className="course-topics">
                        <li>📘Network Fundamentals</li>
                        <li>📘IP Addressing & Subnetting</li>
                        <li>📘Routing Protocols (RIP, OSPF, EIGRP)</li>
                        <li>📘Switching Technologies (VLAN, STP)</li>
                        <li>📘LAN & WAN Architecture</li>
                        <li>📘CCNA Certification Exam Prepare</li>
                    </ul>
                    <div className="meta">
                        <span className="stars">⭐ 4.9</span>
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

export default CCNA;