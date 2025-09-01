import {useState} from "react";
import axios from 'axios'
import "./Contact.css";
import {Link } from 'react-router-dom'
import Logo from './assets/logo.jpg'

function Contact_1() {
    
    // Step 1: Form state
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        email: "",
        course: "",
        mode: "",
    });

    // Step 2: Handle input changes
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Step 3: Submit form handler
    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                    const res = await axios.post("http://127.0.0.1:8000/api_app/contact/", formData);
                    console.log("Detail Sent", res.data);
                    alert("Enquiry submitted successfully!");
                    setFormData({
                        name: "",
                        phone_number: "",
                        email: "",
                        course: "",
                        mode: "",
                    });
                } 
            catch (error) {
                    const errMsg = JSON.stringify(error.response?.data) || "Registration failed";
                    alert("Error: " + errMsg);
                    console.error("Error:", error.response?.data);
                }
            };
    const courses = [
        "Python", "Java", "Web Development", "Data Science", "AI / ML", 
        "UI/UX", "Data Analytics", "Frameworks", "Cloud Computing", 
        "SAP Technologies", "DevOps", "CCNA", "Software Testing", "Spoken English"
    ];

    
    return (
        <>
            <section className="enquiry_section">
                <div className="enquiry_container">
                    {/* Contact Form */}
                    <div className="enquiry_form">
                        <h1>Contact Us</h1>
                        <p>
                            Feel free to contact us any time. We will get back to you as soon as
                            we can!
                        </p>
                        <form onSubmit={ handleSubmit }>
                            <input type="text" value={formData.name} onChange={handleChange} name="name" placeholder="Name" required />
                            <input type="text" value={formData.phone_number} onChange={handleChange} name="phone_number" placeholder="Phone Number" required />
                            <input type="email" value={formData.email} onChange={handleChange}  name="email" placeholder="Email" required />
                            <select name="course" value={formData.course} onChange={handleChange} required >
                                <option value="">Select Course</option>
                                    {courses.map(course => (
                                    <option className="select_option" key={course} value= {course} > {course} </option>
                                    ))}
                            </select>

                            <select name="mode" value={formData.mode} onChange={handleChange} required>
                                <option value="">Select Mode</option>
                                <option className="select_option" value="Online">Online</option>
                                <option className="select_option" value="Offline">Offline</option>
                            </select>
                            <button type="submit">Sumbit Enquiry</button>
                        </form>
                    </div>

                    {/* Contact Info Box */}
                    <div className="contact_info">
                        <h2>Contact Info</h2>
                        <p>
                            <strong>UpMeta Academy</strong>
                        </p>
                        <p>
                        📞 Call: 
                                <a href="tel:+919003722746">+91 90037 22746</a> |  
                                <a href="tel:+918807255889">+91 88072 55889</a>
                        </p>
                        <p>
                        📧 Email:{' '}
                            <a href="mailto:upmetaacademy@gmail.com">upmetaacademy@gmail.com</a>
                        </p>
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

export default Contact_1;