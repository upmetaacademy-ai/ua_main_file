import './Devops.css'
import Logo from './assets/logo.jpg'
import DevopsImage from './assets/devops.avif'
import DockerImage from './assets/docker.webp'
import GitImage from './assets/git.png'
import JenkinsImage from './assets/Jenkins.png'
import KubernetesImage from './assets/Kubernetes.png'
// import CICDImage from './assets/ci_cd.webp'
import {Link} from 'react-router-dom'

function Devop(){
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>DevOps</h1>
                        <p>
                            Learn how to automate software delivery and infrastructure changes with DevOps practices. Master CI/CD pipelines, containerization, and orchestration tools used by top tech companies.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={DevopsImage} alt="DevOps illustration" />
                    </div>
                </div>
            </section>

            <section className='courses'>
                
                <div className="course-card">
                    <img src={JenkinsImage} alt="Jenkins Logo" className="course-img" />
                    <h3>CI/CD with Jenkins</h3>
                    <p>
                        Master Continuous Integration and Deployment using Jenkins. Learn to automate builds, run tests, and deploy code efficiently in modern DevOps pipelines.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 1 Month</span>
                    </div>
                </div>
                <div className="course-card">
                    <img src={KubernetesImage} alt="Kubernetes Logo" className="course-img" />
                    <h3>Mastering Kubernetes</h3>
                    <p>
                        Learn how to deploy, scale, and manage containerized applications with Kubernetes. Gain hands-on experience with clusters, pods, services, and Helm.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 1.5 Months</span>
                    </div>
                </div>
                <div className="course-card">
                    <img src={DockerImage} alt="Docker Logo" className="course-img" />
                    <h3>Docker Essentials</h3>
                    <p>
                        Learn how to containerize applications using Docker. Master image creation, Dockerfiles, volumes, networks, and real-world deployment scenarios.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.7</span>
                        <span className="duration">⏳ 1 Month</span>
                    </div>
                </div>
                <div className="course-card">
                    <img src={GitImage} alt="Git Logo" className="course-img" />
                    <h3>Version Control with Git</h3>
                    <p>
                        Master Git for source code management and team collaboration. Learn branching, merging, pull requests, and GitHub workflows from the ground up.
                    </p>
                    <div className="meta">
                        <span className="stars">⭐ 4.8</span>
                        <span className="duration">⏳ 3 Weeks</span>
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


export default Devop;