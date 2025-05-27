import React, { useEffect, useRef } from 'react';
import conCSS from "./Contact.module.css";
import { animateContact } from "./../../animations"; // Adjust path as needed

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    animateContact(contactRef);
  }, []);

  return (
    <div className={`${conCSS.contact_wrapper} section`} id='contact' ref={contactRef}>
      <div className={conCSS.left}>
        <h2>Contact <span>Me</span></h2>
        <div className={conCSS.contact_content}>
          <div className={conCSS.icon1}>
            <div className={conCSS.row}>
              <i className="fas fa-user"></i>
              <div className={conCSS.info}>
                <div className={conCSS.head}>Name</div>
                <div className={conCSS.sub_tittle}>Shubham Bhalala</div>
              </div>
            </div>
            <div className={conCSS.row}>
              <i className="fas fa-map-marker-alt"></i>
              <div className={conCSS.info}>
                <div className={conCSS.head}>Address</div>
                <div className={conCSS.sub_tittle}>Rajkot, Gujarat</div>
              </div>
            </div>
            <div className={conCSS.row}>
              <i className="fas fa-envelope"></i>
              <div className={conCSS.info}>
                <div className={conCSS.head}>Email</div>
                <div className={conCSS.sub_tittle}>bhalalashubham1@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={conCSS.right}>
            <form action="#">
              <div className={conCSS.fields}>
                <div className={conCSS.field}>
                  <input type="text" placeholder="Name" required />
                </div>
                <div className={conCSS.field} id={conCSS.field1}>
                  <input type="email" placeholder="Email" required />
                </div>
              </div>
              <div className={conCSS.textarea}>
                <textarea cols="30" rows="10" placeholder="Describe projects..." />
              </div>
              <div className={conCSS.button}>
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;