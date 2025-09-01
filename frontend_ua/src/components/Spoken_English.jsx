import "./Cloud_Computing.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import Logo from './assets/logo.jpg';
import SpokenEnglish from './assets/spoken-english.jpg'; // Make sure this image exists

function SpokenEnglishCourse() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Spoken English Mastery</h1>
                        <p>
                            Boost your confidence and communication skills. Learn to speak English fluently through structured lessons, practice sessions, and real-world conversations.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={SpokenEnglish} alt="Spoken English illustration" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <h3>Spoken English Course</h3>
                    <p>
                        Enhance your English speaking skills with our practical and interactive course. Ideal for students, professionals, and job seekers looking to improve fluency and confidence.
                    </p>
                    <ul className="course-topics">
                        <li>🗣️ Basic to Advanced Grammar</li>
                        <li>🗣️ Vocabulary Building</li>
                        <li>🗣️ Group Discussions</li>
                        <li>🗣️ Pronunciation Practice</li>
                        <li>🗣️ Interview Preparation</li>
                    </ul>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 1 Months</span>
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
                                    <li><Link to="/full-stack">Full Stack Development</Link></li>
                                    <li><Link to="/dotnet-angular">.NET Angular Full Stack</Link></li>
                                    <li><Link to="/data-science">Data Science</Link></li>
                                    <li><Link to="/aws-cloud">AWS Cloud Computing Course</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing Course</Link></li>
                                    <li><Link to="/mssql-server">MSSQL Server Online Course</Link></li>
                                </ul>
                            </div>
                        
                            {/* Demand Courses */}
                            <div className="footer-col">
                                <h3>Demand courses</h3>
                                <ul>
                                    <li><Link to="/automation-testing">Automation Testing</Link></li>
                                    <li><Link to="/mern-mean">MERN & MEAN</Link></li>
                                    <li><Link to="/react-native">React Native</Link></li>
                                    <li><Link to="/aws-devops">AWS DevOps</Link></li>
                                    <li><Link to="/powerbi-sql">Power BI & SQL</Link></li>
                                    <li><Link to="/python">Python</Link></li> {/* Correct Python */}
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

export default SpokenEnglishCourse;
