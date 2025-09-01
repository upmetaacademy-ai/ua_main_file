import "./Data_Analyst.css";
import { Link } from 'react-router-dom'
import Logo from './assets/logo.jpg'
import Data_Analystics from './assets/data-analytics.jpg';
import Python from './assets/python.jpg'
import Execel from './assets/execel.png'
import Power_Bi from './assets/power-bi.jpg'
import SQL from './assets/sql_2.jpg'
import Tableau from './assets/tableau.jpg'


function Data_Analyst__(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Become a Data Analytics Expert</h1>
                        <p>
                            Become a Data Analyst - Become a Data Analyst. Learn the skills to
                            analyze, visualize, and interpret complex datasets using tools like
                             SQL, Python, Tableau and Excel. Learn from industry experts.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={Data_Analystics} alt="Data Analystics" />
                    </div>
                </div>
            </section>

            <section className="courses">
                <div className="course-card">
                    <img src={Python} alt="Python Course" />
                    <h3>Python</h3>
                    <p>
                    Learn Python for data analysis and automation using Pandas and NumPy. Build real-world
                    analytics workflows.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 3 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Execel} alt="Excel Course" />
                    <h3>Advanced Excel</h3>
                    <p>
                    Gain expertise in Excel formulas, pivot tables, dashboards, and automation with
                    Power Query and VBA basics.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 2 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Power_Bi} alt="Power BI Course" />
                    <h3>Power BI</h3>
                    <p>
                    Create interactive dashboards with Power BI using DAX, modeling, and publishing.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 2.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={SQL} alt="SQL Course" />
                    <h3>SQL</h3>
                    <p>
                    Learn to manage and query relational databases using SQL. Covers SQL queries, joins,
                    and database design.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.6</span>
                        <span className="duration">⏳ 1.5 Months</span>
                    </div>
                </div>

                <div className="course-card">
                    <img src={Tableau} alt="Tableau Course" />
                    <h3>Tableau</h3>
                    <p>
                    Create dynamic dashboards and data visualizations with Tableau. Learn to tell stories
                    with your data.
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

export default Data_Analyst__;
