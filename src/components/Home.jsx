import React from "react";
import NewPreview from "../assets/images/main_page/preview_new.webp";
import "swiper/css";

import AllProduct from "./AllProduct";
import Awards from "./Awards";
import Delivery from "./Delivery";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="home">
        <div className="contanier">
          <div className="row">
            <div className="main_left_side">
              <div className="main_left_side_content">
                <div className="main_left_side_content_upper">
                  <div className="main_title">
                    <h1>{t("home.title")}</h1>
                  </div>
                  <div className="main_description">
                    <p>
                    {t("home.description")}
                    </p>
                  </div>
                </div>
                <div className="main_left_side_content_lower">
                  <div className="product_preview_row">
                    <div className="product_preview_block_wrapper">
                      <div className="product_preview_block">
                        <div className="product_preview_left cream"></div>
                        <div className="product_preview_right">
                          <div className="product_preview_title">
                            <h3>{t("home.cream")}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product_preview_block_wrapper">
                      <div className="product_preview_block">
                        <div className="product_preview_left milk"></div>
                        <div className="product_preview_right">
                          <div className="product_preview_title">
                            <h3>{t("home.milk")}</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product_preview_block_wrapper">
                      <div className="product_preview_block">
                        <div className="product_preview_left yogurt"></div>
                        <div className="product_preview_right">
                          <div className="product_preview_title">
                            <h3>{t("home.yogurt")}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_right_side">
              <img src={NewPreview} alt="" />
            </div>
          </div>
        </div>
      </section>

      <AllProduct />

      <Awards />

      <Delivery />

      <Contact />
    </main>
  );
};

export default Home;
