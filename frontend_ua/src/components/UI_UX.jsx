import './UI_UX.css'
import { Link } from 'react-router-dom'

import Logo from './assets/logo.jpg'
import Ui_Ux_ from './assets/ui-ux-design.jpg'
import PS from './assets/photoshop.jpg'
import Graphics from './assets/graphics.jpg'
import Figma from './assets/figma.avif'
import Canvas from './assets/canvas.jpg'
function Ui_Ux(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                    <h1>Become a UI/UX Design Expert</h1>
                    <p>
                        Learn to create user-centered designs that enhance user experience. Master tools like
                        Figma, Adobe XD, and core design principles.
                    </p>
                    </div>
                    <div className="hero-image">
                        <img src={Ui_Ux_} alt="UI UX" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <img src={PS} alt="Photoshop Course" />
                    <h3>Photoshop Course</h3>
                    <p>Master essential tools and techniques in Photoshop for modern digital design.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Graphics} alt="Graphic Design Course" />
                    <h3>Graphic Design Course</h3>
                    <p>Learn design principles and tools like Photoshop, Illustrator, and InDesign.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 4 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Figma} alt="Figma Course" />
                    <h3>Figma Course</h3>
                    <p>Design modern, user-friendly interfaces with Figma from scratch.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Canvas} alt="Canvas Design Course" />
                    <h3>Canvas Design Course</h3>
                    <p>Create interactive graphics and animations with HTML5 Canvas.</p>
                    <div className="meta">
                        <span className="stars">⭐ 4.5</span>
                        <span className="duration">⏳ 3 Months</span>
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

export default Ui_Ux;