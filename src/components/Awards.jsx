import React from 'react'
import Awards1 from "../assets/images/main_page/Sertifikat.jpeg";
import ButaAwards from "../assets/images/main_page/buta_certificates.png";
import { useTranslation } from "react-i18next";

const Awards = () => {
  const { t } = useTranslation();
  return (
    
<section className="awards">
<div className="contanier">
  <div className="row">
    <div className="awards_main_section">
      <div className="section_title">
        <h2>{t("awards.title")}</h2>
      </div>
      <div className="awards_content">
        <div className="awards_content_left">
          <img src={Awards1} alt="" />
          
        </div>
        <div className="awards_content_right">
          <div className="awards_content_right_desc">
            <h3>{t("awards.certificate")}</h3>
            <p>
              {t("awards.description1")}
            </p>
            <p>{t("awards.description2")}</p>
            <p>{t("awards.description3")}</p>
            <div className="awards_cert_buta">
              <img src={ButaAwards} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Awards