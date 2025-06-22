import React, { useContext, useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending message...");
  try {
    const response = await fetch("https://ufe4ahze73.execute-api.eu-north-1.amazonaws.com/contact/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "v8V2Ap43sy74GddvbPbNoaNVacjpjxcQ9fh0Bltp" // ⬅️ תכניס כאן את ה־API Key
      },
      body: JSON.stringify(formData)
    });

    const resData = await response.json();
    setStatus(resData.message || "message sent successfully!");
  } catch (err) {
    console.error(err);
    setStatus("message not sent, please try again later.");
  }
};


  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className={`heading contact-title ${isDark ? "dark-mode" : ""}`}>
  {contactInfo.title}
</h1>

            <p className={isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"}>
              {contactInfo.subtitle}
            </p>
            <div className={isDark ? "dark-mode contact-text-div" : "contact-text-div"}>
              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  required
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="your message"
                  required
                  rows="5"
                  onChange={handleChange}
                ></textarea>
                {status !== "Email sent successfully!" && (
                <button type="submit">Send</button>
                )}  
                <p>{status}</p>
              </form>
              <br /><br />
              <SocialMedia socialMediaLinks={socialMediaLinks} />
            </div>
          </div>
          <div className="contact-image-div">
            <div className="image-with-qr">
              <img
                alt="Alon Fisher"
                src={require("../../assets/images/MyPicQR.png")}
                className="profile-image-contact"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
