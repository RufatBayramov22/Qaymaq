import React, { useState } from "react";
import Location from "../assets/images/contactSvg/location.svg";
import Phone from "../assets/images/phone.svg";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
//yup
import "sweetalert2/src/sweetalert2.scss";
import { errorSwal, successSwal } from "../utils/swal";
import { object, string } from "yup";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import InputMask from "react-input-mask";
import Filial from "../assets/images/contactSvg/filial 1.png";
import Filial2 from "../assets/images/contactSvg/filial 2.png";
import Filial3 from "../assets/images/contactSvg/filial 3.png";
const Contact = () => {
  const { t } = useTranslation();
  const [newUser, setnewUser] = useState({
    email: "",
    number: "+994",
    message: "",
    fullName: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const contactSchema = object({
    message: string()
      .trim()
      .required("Please Enter Your Message")
      .min(3)
      .max(15),
    number: string()
      .trim()
      .required("Please enter your phone number !")
      .min(10, "Number should't be less than 10 characters!")
      .max(20, "Number must't be more than 16 characters!"),
    email: string()
      .email("Please include your Email")
      .required("Please Include your Email"),

    fullName: string().trim().required("Please Enter Your Name").min(3).max(15),
  });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await contactSchema.validate(newUser);
      setFormValid(true);
      successSwal("Completed");
    } catch (error) {
      errorSwal("error", error.message);
    }
  };

  return (
    <section className="contact">
      <div className="contanier">
        <div className="row">
          <div className="contact_section_wrapper">
            <div className="section_title">
              <h2>{t("contact.title")}</h2>
            </div>
            <div className="contact_section">
              <div className="contact_left">
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49306.60282622187!2d49.84969384271322!3d40.38143695981493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d495d61ccc9%3A0x9fe0848adb2a83f2!2sQaymaq!5e0!3m2!1sru!2saz!4v1688339520800!5m2!1sru!2saz" 
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  
                />
              </div>
              <div className="contact_right">
                <div className="contact_right_content">
                  <div className="contactSec">
                    <div className="mapContact">
                      <img src={Location} alt="Location" />
                      <Link
                        to="https://www.google.com/maps/search/%C6%8Fhm%C9%99d+Cavad+12C+AZ+1001+(S%C9%99ad%C9%99t+saray%C4%B1)/@40.3813867,49.8361065,14z/data=!3m1!4b1?entry=ttu"
                        target="blank"
                      >
                        Əhməd Cavad 12C AZ 1001 (Səadət sarayı)
                      </Link>
                    </div>
                    <div className="phoneContact">
                      <img src={Phone} alt="Phone" />
                      <Link to="tel:+944 55 123-34-45">+944 55 383-77-77</Link>
                    </div>

                    <div className="mapContact">
                      <img src={Location} alt="Location" />
                      <Link
                        to="https://www.google.com/maps/search/I%CC%87brahimpas%CC%A7a+Dadas%CC%A7ov+202A+(Ayna+Sultanova)/@40.4157196,49.8398812,17z/data=!3m1!4b1?entry=ttu"
                        target="blank"
                      >
                        İbrahimpaşa Dadaşov 202A (Ayna Sultanova)
                      </Link>
                    </div>

                    <div className="phoneContact">
                      <img src={Phone} alt="Phone" />
                      <Link to="tel:+994 77 270-97-58">+994 55 253-13-61</Link>
                    </div>
                    <div className="mapContact">
                      <img src={Location} alt="Location" />
                      <Link
                        to="https://www.google.com/maps/search/%C6%8Fnv%C9%99r+qas%C4%B1mzad%C9%99+44B+(Icheriseher)/@40.3896632,49.8325373,17z/data=!3m1!4b1?entry=ttu"
                        target="blank"
                      >
                        Ənvər qasımzadə 44B (Koala Park)
                      </Link>
                    </div>
                    <div className="phoneContact">
                      <img src={Phone} alt="Phone" />
                      <Link to="tel:+994 55 383-77-77">+994 77 270-97-58</Link>
                    </div>
                  </div>
                  <div className="formContact">
                    <form>
                      <div className="formBox">
                        <div className="formInfo colmd">
                          <div className="formTitle">
                            <h4>{t("contact.question")}</h4>
                            <h4>{t("contact.answer")}</h4>
                          </div>
                          <div class="inputbox">
                            <input
                              required="required"
                              type="text"
                              name="fullName"
                              onChange={handleChange}
                              value={newUser.fullName}
                            />
                            <span>{t("contact.name")}</span>
                            <i></i>
                          </div>
                          <div class="inputbox">
                            <input
                              required="required"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={newUser.email}
                            />
                            <span>{t("contact.email")}</span>
                            <i></i>
                          </div>
                          <div class="inputbox">
                            <InputMask
                              required
                              mask="(+994) 99 999 99 99"
                              maskChar=" "
                              name="number"
                              onChange={handleChange}
                              value={newUser.number}
                            />

                            <span>{t("contact.number")}</span>
                            <i></i>
                          </div>
                          <div className="textareaBox">
                            <textarea
                              maxLength="100"
                              name="message"
                              id="message"
                              cols="30"
                              rows="1"
                              required
                              value={newUser.Message}
                              onChange={handleChange}
                            ></textarea>
                            <span>{t("contact.message")}</span>
                            <i></i>
                          </div>
                          <div className="formBtn">
                            <button
                              type="submit"
                              onClick={submitForm}
                              className={`type1 ${formValid ? "valid" : ""}`}
                            >
                              {t("contact.button")}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="filials">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  <div className="contanier">
                    <SwiperSlide>
                      <img src={Filial} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Filial2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={Filial3} alt="" />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
