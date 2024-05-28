import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../styles/contact.css';

const ContactForm = () => {
  const MySwal = withReactContent(Swal);
  // const template_id = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  // const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
  // const user_id = process.env.REACT_APP_EMAIL_USER_ID;

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_6kw8zt2',
      template_id: 'template_xctu42n',
      user_id: 'VbMSICuUu4za4xc_g',
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message
      }
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
      MySwal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
      });
      setFormData({
        email: '',
        phone: '',
        name: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error.response ? error.response.data : error);
      MySwal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
      });
    });
  };

  return (
    <section className="contact-section contact-page" id="contact">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name <span className='form-req-red'>*</span> :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span className='form-req-red'>*</span> :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message <span className='form-req-red'>*</span> :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
