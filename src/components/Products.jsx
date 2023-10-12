import React, { useEffect, useState } from "react";
import Box1 from "../assets/images/productImg/boxImg.png";
import Box2 from "../assets/images/productImg/box2img.png";
import Box3 from "../assets/images/productImg/box3img.png";
import Box4 from "../assets/images/productImg/box4img.png";
import ButaImg2 from "../assets/images/blogImg/buta 1.png";
import ButaImg3 from "../assets/images/blogImg/buta 3.png";
import Catagories from "../utils/catagories/Catagories";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Dairy Products"); // Modified state
  const [data, setData] = useState(
    Catagories.filter((curData) => curData.category === "Dairy Products")
  );


  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const filterResult = (catItem) => {
    setSelectedCategory(catItem); 
    const result = Catagories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };
  return (
    <section className="allProducts">
      <div className="allProductsPreview">
        <div className="title">
          <h2>{t("products.title")}</h2>
          <div className="boxs">
            <div className="box">
              <img src={Box1} alt="" />
              <h5>{t("products.box1")}</h5>
              <p>{t("products.boxTitle1")}</p>
            </div>
            <div className="box">
              <img src={Box2} alt="" />
              <h5>{t("products.box2")}</h5>
              <p>{t("products.boxTitle2")}</p>
            </div>
            <div className="box">
              <img src={Box3} alt="" />
              <h5>{t("products.box3")}</h5>
              <p>{t("products.boxTitle3")}</p>
            </div>
            <div className="box">
              <img src={Box4} alt="" />
              <h5>{t("products.box4")}</h5>
              <p>{t("products.boxTitle4")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contanier">
        <div className="row">
          <div className="rightSide">
            <img src={ButaImg2} alt="" />
          </div>
          <div className="rightSide2">
            <img src={ButaImg3} alt="" />
          </div>
          <div className="allProductsComponents">
            <div className="category">
              <h4 onClick={() => filterResult("Dairy Products")}>
                {t("products.dairy")}
              </h4>
              <h4 onClick={() => filterResult("Honey Products")}>
                {t("products.honey")}
              </h4>
              {/* <h4 onClick={() => filterResult("Brad and Bakery Products")}>
                {t("products.bread")}
              </h4> */}
              <h4 onClick={() => filterResult("Flour Products")}>
                {t("products.flour")}
              </h4>
            </div>
            <div className={`container ${isOpen ? "open" : ""}`}>
              <button onClick={toggleDropdown}>
                {selectedCategory === "Tüm Kategoriler"
                  ? "All Products"
                  : selectedCategory}
              </button>
              <div className="dropdown-content">
                <button onClick={() => filterResult("Dairy Products")}>
                  {t("products.dairy")}
                </button>
                <button onClick={() => filterResult("Honey Products")}>
                {t("products.honey")}
                  
                </button>
                {/* <button
                  onClick={() => filterResult("Brad and Bakery Products")}
                >
                {t("products.bread")}
                  
                </button> */}
                <button onClick={() => filterResult("Flour Products")}>
                {t("products.flour")}
                  
                </button>
                
              </div>
            </div>
            <div className="secondComponents">
              <div className="secondComponent ">
                {data.map((values) => {
                  const { id, title, image } = values;
                  return (
                    <>
                      <div className="cards" key={id}>
                        <div className="card">
                          <div className="card-front">
                            <img src={image} alt={title} />
                            <h4 className="title">{t(`products.${id}.title`)}</h4>
                          </div>
                          <div className="card-back">
                            <p>{t(`products.${id}.description`)}</p>
                          </div>
                        </div>
                        <div />
                      </div>
                    </>
                  );
                })}
              </div>
                {/* <h3>All Of the Flour Products maked from "Dash deyirmani factory"</h3> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
