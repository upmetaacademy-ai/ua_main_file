import './Data_Science.css'
import { Link } from "react-router-dom";
import Logo from './assets/logo.jpg'
import DS from './assets/data-science.jpg';
import Python_Chatgpt from './assets/python_ds.jpg';
import AI_ML from './assets/ai-ml.jpg';
import Deep_Learning from './assets/deep.jpg';


function Data_science(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Become a Data Science Expert</h1>
                        <p>
                            Unlock the power of data with UpMeta's Data Science course. Learn the essential
                            skills to analyze and interpret large datasets using Python, Machine Learning,
                            and more. Master the techniques to build predictive models, data visualizations,
                            and uncover insights that drive business decisions.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={DS} alt="Data Science" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <img src={Python_Chatgpt} alt="Python for Data Science" />
                    <h3>Python for Data Science</h3>
                    <p>
                    Learn Python programming tailored for data science, including data wrangling,
                    visualization, and statistical analysis.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={AI_ML} alt="AI & ML" />
                    <h3>AI & Machine Learning</h3>
                    <p>
                    Dive into supervised, unsupervised learning, model building, and AI concepts
                    with real-world projects.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 4 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Deep_Learning} alt="Deep Learning" />
                    <h3>Deep Learning</h3>
                    <p>
                    Understand neural networks, CNNs, RNNs, and build intelligent models with
                    TensorFlow & Keras.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 2.5 Months</span>
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

export default Data_science;