import React from 'react';
import { Link } from 'react-router-dom'; // Required if using <Link>
import Logo from './assets/logo.jpg';

const testimonials = [
   {
        stars: '★★★★★',
        content:
        'A good teacher will definitely identify students’ strength and enhance their skills. You are doing a very good job.',
        author: '– Tamarai',
    },
    {
        stars: '★★★★★',
        content:
        'Taking the base Python and advanced Python classes with "upmeta academy" has been an enriching experience. The course provided a comprehensive understanding of python programming and data analy',
        author: '– Jayakumar',
    },
    {
        stars: '★★★★★',
        content:
        'I would highly recommend this training. I thoroughly enjoyed all aspects of the course. Siva is an excellent and knowledgeable teacher and the classes were relaxed and yet informat',
        author: '– Nivetha Sundharam',
    },
    {
        stars: '★★★★★',
        content: 'UpMeta Academy made Python so easy to understand. Loved the hands-on projects!',
        author: '– Kumaravel',
    },
    {
        stars: '★★★★★',
        content: 'I finally grasped SQL joins thanks to the detailed breakdown by the trainer.',
        author: '– Meenakshi',
    },
    {
        stars: '★★★★☆',
        content: 'Great introduction to Excel formulas. The real-time practice was the best part.',
        author: '– Balakrishnan',
    },
    {
        stars: '★★★★★',
        content: 'Power BI dashboards now feel like second nature. Thank you, UpMeta!',
        author: '– Revathi',
    },
    {
        stars: '★★★★★',
        content:
        'Frontend development using HTML, CSS, and JavaScript was taught in a very clear manner.',
        author: '– Suresh',
    },
    {
        stars: '★★★★☆',
        content: 'The React training had practical examples which helped a lot in job interviews.',
        author: '– Shanthi',
    },
    {
        stars: '★★★★★',
        content: 'I liked how Django was explained from scratch. Very beginner-friendly approach.',
        author: '– Thirunavukkarasu',
    },
    {
        stars: '★★★★★',
        content: 'Python + SQL combo helped me land a data analyst internship. Big thanks!',
        author: '– Dhanalakshmi',
    },
    {
        stars: '★★★★☆',
        content: 'Power BI visuals are fun now. The course was perfectly paced.',
        author: '– Kannan',
    },
    {
        stars: '★★★★★',
        content: 'Excel tricks I never knew before! Simple explanations and fun challenges.',
        author: '– Suganya',
    },
    {
        stars: '★★★★★',
        content: 'I came in with zero coding background and now I can build React apps!',
        author: '– Elangovan',
    },
    {
        stars: '★★★★☆',
        content:
        'Frontend tools and deployment were covered thoroughly. Good support from the team.',
        author: '– Mahalakshmi',
    },
    {
        stars: '★★★★★',
        content:
        'The mentor explained Django views and models so clearly. I built my first backend!',
        author: '– Murugan',
    },
    {
        stars: '★★★★★',
        content:
        'Every doubt in Python was clarified with examples. Really boosted my confidence.',
        author: '– Jayalakshmi',
    },
    {
        stars: '★★★★★',
        content: 'The Excel course helped me streamline my work reports. Worth every minute.',
        author: '– Ramanathan',
    },
    {
        stars: '★★★★☆',
        content: 'SQL project at the end was challenging but super rewarding.',
        author: '– Sivakami',
    },
    {
        stars: '★★★★★',
        content: 'The best part was the career tips along with React practice sessions.',
        author: '– Abirami',
    },
    
];

function Reviews() {
  return (
    <>
      <section className="testimonials">
        <div className="testimonial-header">
          <h2>They love us! 🥰</h2>
        </div>

        <div className="slider-track" id="sliderTrack">
          {testimonials.map((testimonial, index) => (
            <div className="card" key={index}>
              <p className="stars" role="img" aria-label="rating">{testimonial.stars}</p>
              <p className="content">{testimonial.content}</p>
              <p className="author">{testimonial.author}</p>
            </div>
          ))}
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

          <div className="footer-bottom">
            <p>Copyright © 2025 <strong>UpMeta Academy</strong>. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
  }

  export default Reviews;
