import "./AboutUs.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaUserGraduate, FaBookOpen, FaCalendarAlt, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom"
import Logo from "./assets/logo.jpg"
import Trainer from "./assets/trainer.jpg"
import Map_ from "./assets/map.jpeg"
function Aboutus(){
    return(
        <>
            <section className="about-section">
                <div className="about-content">
                    <h2>Expert Training and Instruction</h2>
                    <p>
                        At Upmeta Academy, we believe in bridging the gap between education and industry.<br /> Our mission is to 
                        equip students and professionals with the most in-demand technology skills through hands-on,
                        job-oriented training.We focus on practical learning, real-world projects,
                        and career guidance to ensure every learner becomes job-ready and future-proof.
                    </p>

                    <div className="features">
                        <div className="feature">
                            <FaUserGraduate className="icon" />
                            <h4>Personalized Training</h4>
                            <p>
                                Receive customized training programs tailored to your specific needs and goals,
                                ensuring maximum relevance and impact.
                            </p>
                        </div>
                        <div className="feature">
                            <FaBookOpen className="icon" />
                            <h4>Comprehensive Courses</h4>
                            <p>
                                Our courses cover a wide range of topics, providing in-depth knowledge and
                                practical skills that are applicable to real-world scenarios.
                            </p>
                        </div>
                        <div className="feature">
                            <FaCalendarAlt className="icon" />
                            <h4>Flexible Scheduling</h4>
                            <p>
                                We offer flexible scheduling options to accommodate your busy calendar,
                                ensuring that training fits seamlessly into your routine.
                            </p>
                        </div>

                        <div className="feature">
                            <FaUsers className="icon" />
                            <h4>Online Classes</h4>
                            <p>
                                Join our engaging online classes from the comfort of your home. 
                                Experience real-time learning with expert instructors, interactive sessions, and 
                                flexible schedules designed to fit your lifestyle.
                            </p>
                        </div>
                    </div>

                    <div className="contact-link">
                        <h3>Contact</h3><br />
                        <a href="#">Contact Us</a>
                    </div>
                </div>

                <div className="about-image">
                    <img src={ Trainer } alt="Training Class Illustration" />
                </div>
            </section>

            <section className="contact-container">
                <div className="form-map-wrapper">
                    <div className="contact-form">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Course" />
                        <textarea rows="5" placeholder="Message"></textarea>
                        <button>Send Message</button>
                    </div>

                    <div className="map-section">
                        <a href="https://maps.app.goo.gl/bi153Mf4FEmBWGJfA" target="_blank" rel="noopener noreferrer">
                            <img
                                src={ Map_ }
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                loading="lazy"
                                alt="Map"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-info">
                    <p>📘 Company: UpMeta Academy</p>
                    <p>📍 Location: 128, VGP Salai, Parsan Nagar, Vinayagapuram, Chennai, Tamil Nadu 600015</p>
                    <p>
                        📧 Email:{' '}
                        <a href="mailto:upmetaacademy@gmail.com">upmetaacademy@gmail.com</a>
                    </p>
                    <p>
                        📞 Call: <a href="tel:+919003722746">+91 9003722746</a>
                    </p>
                </div>
            </footer>

            <a href="https://wa.me/919003722746" className="whatsapp-icon_">
                <FaWhatsapp />
            </a>

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

export default Aboutus;