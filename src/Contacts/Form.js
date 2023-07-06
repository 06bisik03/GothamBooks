import styles from "./Form.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEffect, useRef, useState } from "react";
import {
  faMapPin,
  faPhone,
  faPaperPlane,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMapPin, faPhone, faPaperPlane, faGlobe);

function Form() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formValid, setFormValid] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const { name, email, subject, message } = data;
    if (name && email && subject && message) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  return (
    <div className={styles.formPage}>
      <div className={styles.container}>
        <div className={styles.contactUs}>
          <div className={styles.leftTitle}>Contact Us</div>
          <div className={styles.detailContact}>
            <FontAwesomeIcon
              icon="map-pin"
              className={`${styles.icon} ${styles.first}`}
            />
            ADDRESS: <br />
            198 West 21th Street, Suite 721 New York NY 10016
          </div>
          <div className={styles.detailContact}>
            <div className={styles.second}>
              <FontAwesomeIcon icon="phone" className={styles.icon} />
            </div>
            PHONE:
            <br />+ 1235 2355 98
          </div>
          <div className={styles.detailContact}>
            <div className={styles.third}>
              <FontAwesomeIcon icon="paper-plane" className={styles.icon} />
            </div>
            EMAIL:
            <br />
            gothamCity@batfans.com
          </div>
          <div className={styles.detailContact}>
            <div className={styles.fourth}>
              <FontAwesomeIcon icon="globe" className={styles.icon} />
            </div>
            WEBSITE
            <br />
            GothamBooks.com
          </div>
        </div>
        {sent ? (
          <div className={styles.getTouch}>
            <img
              src="/ShopWelcomeImages/checkmark.png"
              className={styles.check}
            />

            <div className={styles.appreciation}>
              Thank you for contacting us, {formData.name}! Your Message has
              been forwarded.
            </div>
          </div>
        ) : (
          <form
            className={styles.getTouch}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className={styles.rightTitle}>Get in Touch</div>
            <input
              className={styles.inputField}
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              className={styles.inputField}
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              className={styles.inputField}
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />

            <textarea
              className={styles.message}
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <div className={styles.submitButton}>
              <button
                type="submit"
                className={styles.formularButton}
                disabled={formValid ? false : true}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
