import React, { useState } from "react";
import "../styles/components/contact.css";
import img1 from "../assets/images/img1.jpg";
// Import slider images (replace with actual image paths)
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: slide1,
      subtitle: "Premium Quality",
      title: "Custom Notebook Manufacturing",
      desc: "Bulk orders for schools, colleges & corporates across Kolkata",
    },
    {
      id: 2,
      image: slide2,
      subtitle: "Fast Turnaround",
      title: "Offset & Digital Printing",
      desc: "Notebooks, diaries, registers – printed and bound with care",
    },
    {
      id: 3,
      image: slide3,
      subtitle: "Trusted Since 1995",
      title: "Sealdah, Kolkata",
      desc: "Your local partner for all stationery needs",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully ✅");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="contact-page">
      {/* 1. HERO SLIDER (Full Width, Manual Dots, Fixed Height) */}
      <section className="hero-slider-section">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay-dark">
              <div className="hero-content">
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <a href="/shop" className="btn-hero">
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* 2. OFFICE + MAP */}
      <section className="office-section">
        <div className="office-left">
          <h2>Our office & Factory</h2>
          <p>
            Building No. 14 B, PATWAR BAGAN LANE,
            <br /> SEALDAH, Kolkata,
            <br /> West Bengal 700009
          </p>
          <h4>Hours</h4>
          <p>
            Monday - Saturday
            <br />
            9am - 7pm
          </p>
          <h4>Contacts</h4>
          <p>
            +91 983 077 0400
            <br />
            nswplsaha@yahoo.com
          </p>
        </div>
        <div className="office-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4370.078943523779!2d88.37186729999999!3d22.5751359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02770886ac645f%3A0xdb9dc4fb09fdfeb1!2s14%2Fb%2C%20Patwar%20Bagan%20Ln%2C%20Baithakkhana%2C%20Kolkata%2C%20West%20Bengal%20700009!5e1!3m2!1sen!2sin!4v1775720407409!5m2!1sen!2sin"
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </section>

      {/* 3. CONTACT FORM */}
      <section className="form-section">
        <h2>Get in touch</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* 4. TESTIMONIALS - Kolkata Stationery Business Focused */}
      <section className="testimonial">
        <h2>What our Kolkata clients say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
              ”Eder notebook er quality khub bhalo. Amader school er jonno bulk
              order diyechilam, time moto peye gechi. Printing o khub clear.”
            </p>
            <span>- Anirban Sen, Principal, South Point School</span>
          </div>
          <div className="testimonial-card">
            <p>
              ”Sealdah te ektai trustworthy notebook manufacturer. Bespoke diary
              bananor jonno onek care ney. Highly recommend korchi.”
            </p>
            <span>- Madhumita Ghosh, Corporate Gifting, Salt Lake</span>
          </div>
          <div className="testimonial-card">
            <p>
              ”Ami last 10 years dhore oder theke kagoj kinchi. Price reasonable
              ar delivery time thik thake. Khub bhalo byabsha.”
            </p>
            <span>- Pradip Das, Stationery Shop Owner, College Street</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;