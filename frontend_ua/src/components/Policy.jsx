import React from "react";
import "./Policy.css"; // Update CSS accordingly
import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpg";

function PrivacyPolicy() {
    return (
        <>
            <div className="policy-page">
                <header className="policy-header">
                    <h1 className="p1">Privacy Policy</h1>
                </header>

                <main className="policy-container">
                    <p>
                        At UpMeta Academy, we respect your privacy and are committed to
                        protecting it through our compliance with this policy. This policy
                        describes the types of information we may collect from you or that
                        you may provide when you visit our website or use our services, and
                        our practices for collecting, using, maintaining, protecting, and
                        disclosing that information.
                    </p>

                    <section>
                        <h2>Information We Collect About You</h2>
                        <p>
                            We collect several types of information from and about users of our
                            website and our services, including information:
                        </p>
                        <ul>
                            <li>
                                By which you may be personally identified, such as name, postal
                                address, e-mail address, telephone number, or any other identifier
                                by which you may be contacted online or offline (
                                <strong>"personal information"</strong>).
                            </li>
                            <li>That is about you but individually does not identify you.</li>
                            <li>
                                About your internet connection, the equipment you use to access
                                our website, and usage details.
                            </li>
                            <li>
                                Through cookies and similar tracking technologies to enhance your
                                browsing experience.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>How We Use Your Information</h2>
                        <p>
                            We use information that we collect about you or that you provide to
                            us, including any personal information:
                        </p>
                        <ul>
                            <li>To present our website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>
                                To carry out our obligations and enforce our rights arising from any
                                contracts entered into between you and us, including for billing and
                                collection.
                            </li>
                            <li>To notify you about changes to our website or any products or services we offer or provide through it.</li>
                            <li>To analyze website usage and improve our services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Disclosure of Your Information</h2>
                        <p>
                            We may disclose aggregated information about our users, and
                            information that does not identify any individual, without restriction.
                        </p>
                        <p>
                            We may also disclose personal information to trusted third-party
                            service providers who assist us in operating our website, conducting
                            our business, or servicing you, provided that those parties agree to
                            keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2>Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to
                            protect your personal information against unauthorized access,
                            alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2>Compliance with Digital Marketing Platforms</h2>
                        <p>
                            We adhere to the privacy policy requirements of Google Ads, Facebook
                            Ads, and other digital marketing platforms.
                        </p>
                        <p>We ensure transparency in data collection, use, and sharing practices.</p>
                        <p>
                            We obtain explicit consent from users before collecting, storing, or
                            using their data.
                        </p>
                    </section>

                    <section>
                        <h2>Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal
                            information and to withdraw consent where applicable. To exercise
                            these rights, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2>Changes to Our Privacy Policy</h2>
                        <p>It is our policy to post any changes we make to our privacy policy on this page.</p>
                        <p>
                            If we make material changes to how we treat our users' personal
                            information, we will notify you through a notice on the website home
                            page.
                        </p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or how we handle
                            your data, please contact us at{" "}
                            <a href="mailto:upmetaacademy@gmail.com">upmetaacademy@gmail.com</a>.
                        </p>
                    </section>

                    <section className="contact-info">
                        <h2>Contact Information</h2>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy
                            practices, contact us at:
                        </p>
                        <ul>
                            <li>
                            <strong>Phone:</strong> +91 9003722746 / +91 8807255889
                            </li>
                            <li>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:upmetaacademy@gmail.com">upmetaacademy@gmail.com</a>
                            </li>
                            <li>
                            <strong>Address:</strong> 128, VGP Salai, Parsan Nagar, Vinayagapuram,
                            Chennai, Tamil Nadu 600015
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
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

export default PrivacyPolicy;
