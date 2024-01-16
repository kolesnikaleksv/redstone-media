import React, { useState } from 'react';

import './contact-form.scss'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formResponse, setFormResponse] = useState('');

  const toggleResponceBlock = (color) => {
    document.querySelector('.form-response').classList.add(`text-${color}-500`);
    document.querySelector('.form-response').classList.add('block');
    document.querySelector('.form-response').classList.remove('hidden');
  }

  const handleSubmit = async (e) => { console.log(formData)
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormResponse('Form submitted successfully!');
        toggleResponceBlock('green');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
      } else {
        setFormResponse('Error submitting the form. Please try again.');
        toggleResponceBlock('red');
      }
    } catch (error) {
      setFormResponse('Error submitting the form. Please try again.');
      toggleResponceBlock('red');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="ContactForm">
      <input type="hidden" name="g-recaptcha-response" value="03AFcWeA6Zj1fVXX-waQQIKA5O4ukd7_3UbD2ST6NeK-iMUbI6GRe_ptt_AkqPgjYdzqKksyY3iOjpmeI_oJB2E3-VPlSlgNPLQSwLLWSMcswIzFP5eGPhdggO160o7z9buCbcoO8OGNrXpV7Mvo7RxqE0GR79FaB_toBak71oDwR7RvnytoRWTh6988nR9enfankjL2pwQgwVixxkoKHS6hysUHEkUNpiNceUbTuzd14xMR3_IZFMomM9K-6s4ivsdMA3fAbXVPZ5Boy3n_jaehU7tjygsy5E-0HORuGs17LpvsGweZtpYJXWn7PUiv2CssPgtv-ui5HgOIN0yQciXq-iBOS5rlnYb39Ud16Br8g_KImC5gGuyy0UQ6jEJblfU95G6v-GHmAztSrFBMMKT7is-kukp6n8ZXzqDbye3RNFLUBHAvOfAakjb5wdjtDtpHIc0vKiodWRkvfbGZnTr0x_5gEnimCSZKPhRWSWma2LYtWYW95lzryC0J-MqqsbSYGzQXzYRt0PqmE7GvrN3atdnzmDhVjSx-gQ1sCzAQYynY_aFX8x_gY"/>
      <div className="row form-row">
        <div className="basis-0 md:basis-3/6 col-md-6 form-col">
          <input
            type="text"
            name="name"
            placeholder="Ваше ім’я"
            className="input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="basis-full md:basis-3/6 col-md-6 form-col">
          <input 
            type="tel"
            name="phone" 
            placeholder="Ваш телефон" 
            className="input"
            value={formData.phone}
            onChange={handleInputChange}/>
        </div>
        <div className="basis-full form-col">
          <input 
            type="email" 
            name="email" 
            placeholder="*Ваш email" 
            className="input" 
            required=""
            value={formData.email}
            onChange={handleInputChange}/>
        </div>
        <div className="basis-full form-col">
          <textarea 
            name="message" 
            placeholder="Коротко опишіть свій проект" 
            className="input" 
            data-gramm="false" 
            wt-ignore-input="true"
            value={formData.message}
            onChange={handleInputChange}></textarea>
        </div>
      </div>
      <div className="flex flex-row justify-center sm:justify-between items-center">
        <button type="submit" className="btn btn-inverted">НАДІСЛАТИ</button>
      </div>
        <div className="form-response hidden">{formResponse}</div>
    </form>
  );
};

export default ContactForm;