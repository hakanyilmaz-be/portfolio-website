import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hf39vri",
        "template_profilewebsite",
        formRef.current,
        "USfQfXzCv7b450iZu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Laten we uw project bespreken</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a href="tel:+32489384172">+32 489 38 41 72</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:info@hakanyilmaz.be">info@hakanyilmaz.be</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Herent, 3020, België
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Wat is jouw verhaal?</b> Neem contact op. Altijd beschikbaar voor freelancers als het juiste project voorbij komt. mij.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Naam" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Onderwerp" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="E-mail" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Bericht" name="message" />
            <button>Verzend</button>
            {done && " Uw bericht is succesvol verzonden. Dank u..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
