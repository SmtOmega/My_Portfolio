import { MdEmail, MdPhone, MdPlace } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";
import NavMenu from "../components/NavMenu";
import "../css/ContactPage.css";

const Contact = () => {
  return (
    <div>
      <NavMenu />
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-page-container">
          <section className="contact-page-left-section">
            <div className="contact-info">
              <div className="contact-icon">
                <MdPhone />
              </div>
              <div>
                <p>+234-7057</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div>
                <p>smtomega@gmail.com</p>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-icon">
                <MdPlace />
              </div>
              <div>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </section>
          <section className="contact-page-right-section">
            <ContactForm />
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Contact;
