import './Head.css';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Courses_section from './Brochure';
import { FaBars, FaTimes, FaWhatsapp  } from "react-icons/fa"; 

// Import Video
// import Video from "./assets/code.mp4"
// import Video from "./assets/code_no_sound.mp4"
import Video from "./assets/code_sound.mp4"

// Image Import
import Logo from "./assets/logo.jpg";
import Girl from "./assets/girl.jpg";
import Boy from "./assets/boy.jpg";
import Fullstack from "./assets/full-stack.jpg"
import ReactJs from "./assets/react_1.jpg"
import PowerBi from "./assets/power-bi.jpg"
import Python from "./assets/python.jpg"
import Aws from "./assets/aws.webp"
import Apple from "./assets/apple.jpg"
import Ms from "./assets/ms.svg"
import Ibm from "./assets/ibm.png"
import Accenture from "./assets/Accenture.png"
import Cisco from "./assets/cisco.png"
import Gen_ai from "./assets/gen-ai.webp"

function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
        if (menuOpen) return; // Don't hide header if menu is open

        if (window.scrollY > lastScrollY) {
            // Scrolling down → hide header
            setIsHidden(true);
        } else {
            // Scrolling up → show header
            setIsHidden(false);
        }
        lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
        }, [menuOpen]);

    return (
        <>
            <div className="top-bar">
                <p>
                    Need Help? Talk to our Academic Advisors{" "}
                    <a href="tel:+918807255889">Request a Call ↗</a>
                </p>
            </div>
            <header className={isHidden ? "hide" : ""}>
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="UpMeta Logo" />
                </div>

                {/* Hamburger / Close Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? (
                    <FaTimes size={24} color="white" />
                    ) : (
                    <FaBars size={24} color="white" />
                    )}
                </div>

                {/* Navigation */}
                <nav className={menuOpen ? "nav-open" : ""}>
                    <ul>
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li className="dropdown"><Link to="/course" onClick={closeMenu}>Courses</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/pl" onClick={closeMenu}>Programming Languages</Link></li>
                                <li><Link to="/framework" onClick={closeMenu}>Framework</Link></li>
                                <li><Link to="/web_dev" onClick={closeMenu}>Web & App Development</Link></li>
                                <li><Link to="/ui_ux" onClick={closeMenu}>UI & UX</Link></li>
                                <li><Link to="/data_science" onClick={closeMenu}>Data Science</Link></li>
                                <li><Link to="/data_analytics" onClick={closeMenu}>Data Analyst</Link></li>
                                <li><Link to="/cloud_computing" onClick={closeMenu}>Cloud Computing</Link></li>
                                <li><Link to="/course" onClick={closeMenu}>More Courses</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                        <li className="dropdown_2">
                            <Link to="/contact" onClick={closeMenu}>Mode</Link>
                            <ul className="dropdown-menu_2">
                                <li><Link to="/contact" onClick={closeMenu}>Offline</Link></li>
                                <li><Link to="/contact" onClick={closeMenu}>Online</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="page-wrapper">
                <section className="hero">
                    <div className="hero-text">
                        <h1>
                            Success is a journey<br />
                            driven by passion,<br />
                            growth, and <span>UpMeta</span>
                        </h1>
                        <p>
                            Every step forward is fueled by innovation<br />
                            and the courage to keep evolving.
                        </p>
                        <button className="enroll_main" onClick={() => window.location.href = '/contact'}>
                            Enroll Today
                        </button>
                    </div>
                    <div className="hero-image">
                        <div className="left-image">
                            <img src={ Girl } alt="Student" className="hero-img" />
                        </div>
                        <div className="right-stack">
                            <img src={ Boy } alt="Support" className="hero-img" />
                        <div className="call-support">
                            <div className="icon">
                                📞
                            </div>
                                <div className="text">
                                    <p>ONLINE SUPPORT</p>
                                    <h3>+91 90037 22746</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="video-section">
                <div className="video-wrapper">
                    <video id="myVideo" playsInline autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div
                        className="play-button"
                        onClick={() => {
                            const video = document.getElementById('myVideo');
                            if (video.paused) {
                                video.play();
                            } 
                            else {
                                video.pause();
                            }
                        }}>
                    </div>
                </div>

                
                {/* Course Section */}
                <div className="course-intro">
                    <h2>Discover a course designed, just for you</h2>
                    <div className="underline"></div>
                    <p>Level up your career</p>
                </div>
            </section>

            <section className="slider">
                <div className="slider-container">
                    <div className="slider-track">
                        {
                            [
                                { 
                                    img: Fullstack, 
                                    title: 'Full Stack Development', 
                                    desc: 'Learn full-stack web development...', 
                                    time: '6 Months' 
                                }, 
                                { 
                                    img: ReactJs, 
                                    title: 'React JS', 
                                    desc: 'Build cross-platform apps...', 
                                    time: '2 Months' 
                                },
                                { 
                                    img: Python,
                                    title: 'Python Programming', 
                                    desc: 'Learn Python from scratch...', 
                                    time: '3 Months' 
                                },
                                {
                                    img: Gen_ai,
                                    title: 'Generative AI',
                                    desc: 'Learn to build with LLMs, prompt engineering, and real-world AI tools.',
                                    time: '2 Months'
                                }
                            ].map((course, i) => (
                                    <div className="card" key={i}>
                                        <img src={course.img} alt={course.title} />
                                        <h3>{course.title}</h3>
                                        <p>{course.desc}</p>
                                        <div className="meta">
                                            <span>⭐ 5.0</span>
                                            <span>⏱ {course.time}</span>
                                        </div>
                                    </div>))
                        }
                    </div>
                    <div className="center-container">
                        <Link to="/course" className="explore-btn">Explore Courses</Link>
                    </div>
                </div>
            </section>

            <section className="stats-section">
                {
                    [
                        { num: '700+', text: 'Students Enrolled', bg: 'orange-bg' }, 
                        { num: '50+', text: 'Courses', bg: 'black-bg' }, 
                        { num: '100%', text: 'Satisfaction Rate', bg: 'orange-bg' }, 
                        { num: '50+', text: 'Top Instructors', bg: 'black-bg' }
                    ].map((stat, i) => (
                        
                        <div className={`stat-card ${stat.bg}`} key={i}>
                            <h2>{stat.num}</h2>
                            <p>{stat.text}</p>
                        </div>
                        ))
                }
            </section>

            {/* Ongoing */}
            <Courses_section />

            
            <section className="section-employers">
                <h2>Employer's demand 2025</h2>
                <p>Your thought matters!</p>
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {
                            [
                                {
                                    img: Apple,
                                    founder: "Steve Jobs, Steve Wozniak, and Ronald Wayne",
                                    CEO: "Tim Cook since August 24, 2011",
                                    description: "Apple Intelligence helps you write, express yourself and get things done effortlessly."
                                },
                                {
                                    img: Ms,
                                    founder: "Bill Gates and Paul Allen",
                                    CEO: "Satya Nadella since February 4, 2014",
                                    description: "Microsoft empowers every person and organization on the planet to achieve more."
                                },
                                {
                                    img: Ibm,
                                    founder: "Charles Ranlett Flint",
                                    CEO: "Arvind Krishna since April 6, 2020",
                                    description: "IBM brings the power of AI and hybrid cloud to business."
                                },
                                {
                                    img: Cisco,
                                    founder: "Leonard Bosack and Sandy Lerner",
                                    CEO: "Chuck Robbins since July 26, 2015",
                                    description: "Cisco helps securely connect everything to make anything possible."
                                },
                                {
                                    img: Accenture,
                                    founder: "Clarence DeLany (as part of Andersen Consulting)",
                                    CEO: "Julie Sweet since September 1, 2019",
                                    description: "Accenture delivers on the promise of technology and human ingenuity."
                                }
                            ].map((empty,i) =>(
                                <div className="carousel-card" key={i}>
                                    <div>
                                        <img src={empty.img} alt="Company Logo" className="company-logo"/>
                                        <p><strong>Founders:</strong>{empty.founder}</p>
                                        <p className="ceo"><strong>CEO:</strong>{empty.CEO}</p>
                                        <blockquote>
                                            {empty.description}
                                        </blockquote>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>⭐⭐⭐⭐⭐ 4.9</h2>
                <h1>They love us! 🥰</h1>
                <div className="testimonial-slider">
                    <div className="slider-track" id="sliderTrack">
                        {['TAMARAI', 'MILLAR JAYAKUMAR', 'PRIYA', 'RAJESH'].map((name, i) => (
                            <div className="card" key={i}>
                                <p className="stars">★★★★★</p>
                                <p className="content">
                                    {[
                                        "This course provided everything I needed to understand the core IT concepts. It’s perfect for beginners and professionals alike!",
                                        "The content was clear, well-structured, and the practical examples really helped me build confidence in real-world projects.",
                                        "From basic fundamentals to hands-on applications, this course made complex topics feel simple and engaging.",
                                        "Truly one of the best learning experiences I’ve had online. The modules are concise, relevant, and easy to follow."
                                    ][i]}
                                </p>
                                <p className="author">{name}</p>
                            </div>
                            ))}

                    </div>
                    <div className="center-container">
                        <Link to="/review" className="explore-btn">See Review</Link>
                    </div>
                </div>
            </section>
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

                            {/* Social icons placed here */}
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

export default Head;