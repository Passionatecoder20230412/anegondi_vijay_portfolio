// components/Contact.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', bot: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [lastSubmitTime, setLastSubmitTime] = useState(null);
  const formRef = useRef();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.bot) {
      setMessage({ type: 'error', text: 'Spam detected. Submission blocked.' });
      return;
    }

    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 15000) {
      setMessage({ type: 'error', text: 'Please wait before submitting again.' });
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setMessage({ type: 'error', text: 'Please fill in your name and email.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    setLoading(true);
    setMessage(null);
    setLastSubmitTime(now);

    emailjs
      .sendForm('service_hkr8ze1', 'template_hqjkxxl', formRef.current, { publicKey: 'iT87D86ehTNaitST1' })
      .then(() => {
        setLoading(false);
        setMessage({ type: 'success', text: 'Message sent successfully!' });
        setFormData({ name: '', email: '', comment: '', bot: '' });
      })
      .catch(() => {
        setLoading(false);
        setMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <section id="contact" className="section active">
      <h2 className="sectionTitle">Contact</h2>
      <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate>
        <input type="text" name="bot" value={formData.bot} onChange={handleChange} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
        <label htmlFor="name" className="label">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="input" placeholder="Your full name" required />

        <label htmlFor="email" className="label">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="input" placeholder="your.email@example.com" required />

        <label htmlFor="comment" className="label">Comments</label>
        <textarea id="comment" name="comment" value={formData.comment} onChange={handleChange} className="textarea" placeholder="Your message" />

        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {message && (
          <p className={message.type === 'error' ? 'errorMsg' : 'successMsg'}>
            {message.text}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
