import React from 'react'
import Wolt from "../assets/images/main_page/delivery_left.webp";
import IndiAl from "../assets/images/main_page/delivery_lINDI.webp";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Delivery = () => {
  const { t } = useTranslation();
  return (
    <section className="delivery">
    <div className="contanier">
      <div className="row">
        <div className="delivery_section_wrapper">
          <div className="section_title">
            <h2>{t("delivery.title")}</h2>
          </div>
          <div className="delivery_content">
            <div className="delivery_block">
              <Link
                to="https://wolt.com/az/aze/baku/venue/qaymaq-ahmad-javad-str"
                target="blank"
              >
                <img src={Wolt} alt="" />
              </Link>
            </div>
            <div className="delivery_block">
              <Link to="">
                <img src={IndiAl} alt="" />
              </Link>
            </div>
          </div>
          {/* <div class="card5">
  <div class="card5-content">
    <span>Our Delivery</span>
    <p>If you dont have above applications?</p>
    <Link to="tel:0552531361">
      <span>Call Us:</span>
      055-253-13-61</Link>
  </div>
</div> */}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Delivery