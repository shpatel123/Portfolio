import React, { useEffect, useRef } from "react";
import conCSS from "./Contact.module.css";
import { animateContact } from "./../../animations";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const contactRef = useRef(null);

  useEffect(() => {
    animateContact(contactRef);
  }, []);

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_9v4mudn",  
        "template_plb33qj", 
        templateParams,
        "hWkp2_r3L8GNmcBN_"           
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent successfully!");
          reset(); // clear form
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
  };

  return (
    <div
      className={`${conCSS.contact_wrapper} section`}
      id="contact"
      ref={contactRef}
    >
      <div className={conCSS.left}>
        <h2>
          Contact <span>Me</span>
        </h2>
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
                <div className={conCSS.sub_tittle}>
                  bhalalashubham1@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className={conCSS.right}>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className={conCSS.fields}>
                <div className={conCSS.field}>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  <div className={conCSS.errorWrapper}>
                    {errors.name && (
                      <p className={conCSS.errorText}>{errors.name.message}</p>
                    )}
                  </div>
                </div>

                <div className={conCSS.field} id={conCSS.field1}>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  <div className={conCSS.errorWrapper}>
                    {errors.email && (
                      <p className={conCSS.errorText}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className={conCSS.textarea}>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Describe projects..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 10, message: "Min 10 characters" },
                  })}
                />
                <div className={conCSS.errorWrapper}>
                  {errors.message && (
                    <p className={conCSS.errorText}>
                      {errors.message.message}
                    </p>
                  )}
                </div>
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
