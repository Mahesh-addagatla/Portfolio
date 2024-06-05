import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05b5cb94-0468-4588-8034-4d3aa9835091");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      alert(data.message);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div className='portfolio-contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free </p>
        
        <div className="contact-details">
            <div className="contact-detail">
                <i class="fa-brands fa-google"></i><p>22pa1a0502@vishnu.edu.in</p></div>
            <div className="contact-detail">
                <i class="fa-solid fa-location-dot"></i><p>Waranagl, Telangana</p>
            </div>
            <div className="contact-social">
            <div className="contact-detail-social">
                <a href="www.linkedin.com/in/mahesh-addagatla"><i class="fa-brands fa-linkedin"></i></a>
            </div>
            <div className="contact-detail-social">
                <a href="https://www.instagram.com/mahi_addagatla?igsh=cWJmcDd1cGluNG9n"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div className="contact-detail-social">
                <a href="https://github.com/Mahesh-addagatla"><i class="fa-brands fa-github"></i></a>
            </div>
            <div className="contact-detail-social">
                <a href="https://x.com/mahi_0727"><i class="fa-brands fa-twitter"></i></a>
            </div>
            </div>
        </div>
        </div>
        <form action="" className='contact-right' onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Write Your Message</label>
            <textarea name="message" rows='8' id="" placeholder='Enter Your message'></textarea>
            <button className="contact-submit" type='submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
