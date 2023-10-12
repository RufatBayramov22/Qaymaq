import React from 'react'
import AboutImg from "../assets/images/aboutImg/aboutMain.jpeg"
import ButaLeft from "../assets/images/aboutImg/buta_left.svg"
import ButaRight from "../assets/images/aboutImg/buta_right.svg"
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
        <section className='about'>
            <div className="contanier">
                <div className="row">
     

    <div className="about_content_wrapper" >
        <div className="about_content">
    <div className="about_title">
        <h2>{t("about.title")}</h2>
    </div>
            <div className="about_image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="about_text_content">
                <p>
                {t("about.description")}
                </p>
            {/* <Link to="https://www.youtube.com/embed/qhTVO19_n2A" target='blank'>Video</Link> */}

            </div>
      
        
        </div>
    </div>

    <div className="buta_image_left">
       <img src={ButaLeft} alt="" />
    </div>

    <div className="buta_image_right">
       <img src={ButaRight} alt="" />
    </div>

                </div>
            </div>
        </section>
    </main>
  )
}

export default About