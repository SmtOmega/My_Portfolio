const ContactForm = () => {
  return (
    <div>
        <h2>Send Me A Message</h2>
      <form>
        <div className='form-group'>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" email="email" />
        </div>
        <div className='form-group'>
          <label htmlFor="message">Enter Your Messages</label>
          <textarea id="message" message="message"  />
        </div>
        <button className='form-btn'>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
