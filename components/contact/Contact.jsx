/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm('service_kvtc6ka', 'template_l24bv59', form.current, {
        publicKey: 'RWc87nocERvlT4UHB',
      });
      
      setSubmitStatus('success');
      e.target.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email send failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      data: "abhishekverma495@gmail.com",
      link: "mailto:abhishekverma495@gmail.com",
      color: "var(--primary-600)"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      data: "(+91) 7236027172",
      link: "https://api.whatsapp.com/send?phone=7236027172&text=Hello, I would like to connect with you!",
      color: "#25D366"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      data: "(+91) 7236027172",
      link: "tel:+917236027172",
      color: "var(--accent-500)"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      data: "India",
      link: "#",
      color: "var(--success)"
    }
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch 📩</h2>
      <span className="section__subtitle">
        Ready to get started on your project? <br/> 
        Contact me now for a free consultation.
      </span>

      <div className="contact__container container">
        {/* Contact Information */}
        <div className="contact__info-section">
          <h3 className="contact__info-title">
            Let's Connect <span className="contact__info-icon">💬</span>
          </h3>
          <p className="contact__info-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="contact__info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact__info-card">
                <div 
                  className="contact__info-icon-wrapper"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <div 
                    className="contact__info-icon-inner"
                    style={{ color: info.color }}
                  >
                    {info.icon}
                  </div>
                </div>
                <div className="contact__info-content">
                  <h4 className="contact__info-card-title">{info.title}</h4>
                  <span className="contact__info-card-data">{info.data}</span>
                  <a 
                    href={info.link} 
                    className="contact__info-button"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    Get in Touch <FaPaperPlane />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact__form-section">
          <h3 className="contact__form-title">
            Send Me a Message <span className="contact__form-icon">✉️</span>
          </h3>
          
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-input-wrapper">
                <FaUser className="contact__form-input-icon" />
                <input 
                  type="text" 
                  name="name" 
                  className="contact__form-input" 
                  placeholder="Your Full Name"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <div className="contact__form-input-wrapper">
                <FaEnvelope className="contact__form-input-icon" />
                <input 
                  type="email" 
                  name="email" 
                  className="contact__form-input" 
                  placeholder="Your Email Address"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <div className="contact__form-input-wrapper">
                <FaComment className="contact__form-input-icon" />
                <textarea 
                  name="message" 
                  className="contact__form-textarea" 
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              className={`contact__form-button ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="contact__form-spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane />
                </>
              )}
            </button>

            {submitStatus && (
              <div className={`contact__form-status ${submitStatus}`}>
                {submitStatus === 'success' 
                  ? '✅ Message sent successfully! I\'ll get back to you soon.' 
                  : '❌ Failed to send message. Please try again.'
                }
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;