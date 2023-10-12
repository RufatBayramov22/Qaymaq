import React from "react";
import SliderFirst from "../utils/catagories/bal mehsullari/cicek bali.jpg";
import SliderSecond from "../utils/catagories/un Mehsullari/ela nov un 1kq.jpg";
// import SliderThird from "../utils/catagories/corek mehsullari/borodinski corek 500.jpg";
import SliderFourth from "../assets/images/productImg/Qatiq.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ButaMilk from "../assets/images/main_page/buta_milk.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AllProduct = () => {
  const { t } = useTranslation();
  return (
    <section className="product">
      <div className="contanier">
        <div className="row">
          <div className="products_preview_section_wrapper">
            <div className="products_preview_bg_image">
              
            </div>
            <div className="products_preview_buta_image">
              <img src={ButaMilk} alt="" />
            </div>
            <div className="products_preview_section">
              <div className="products_preview_title">
                <h2>{t("allproduct.title")}</h2>
                <div className="products_preview_desc">
                  <p>
                    {t("allproduct.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="productSlider">
              <div className="container">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="card">
                      <img src={SliderFirst} alt="" />
                      <h3>{t("products.honey")}</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <img src={SliderFourth} alt="" />
                      <h3>{t("products.dairy")}</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card">
                      <img src={SliderSecond} alt="" />
                      <h3>{t("products.flour")}</h3>
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div className="card">
                      <img src={SliderThird} alt="" />
                      <h3>{t("products.bread")}</h3>
                    </div>
                  </SwiperSlide> */}
                
                </Swiper>
              </div>
              <div className="products_button">
                <Link to="/products" className="btn">
                {t("allproduct.seeAll")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
