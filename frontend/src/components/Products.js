// Imports
import productsJSON from "./products.json";
import { Link } from "react-router-dom";

import foodbanner from "./banner/food-banner.jpg";
import foodbanner2 from "./banner/food_delivery.gif";
import card1 from "./banner/card1.png";
import card2 from "./banner/card2.png";
import card3 from "./banner/card3.png";
import card4 from "./banner/card4.png";

// function to render the Product Items

export function Products() {
  function renderProducts() {
    if (productsJSON !== undefined) {
      return productsJSON.results.map(function (productItem) {
        return (
          <div
            key={productItem.id}
            id={productItem.id}
            className="col-md-6 col-sm-15"
          >
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to={`/data/${productItem.id}`}
            >
              <div className="card ">
                <img src={productItem.image} alt={productItem.name}></img>
                <div className="card-body">
                  <h5 className="card-title">{productItem.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    }
  }
  return (
    <div>
      {/* <section className="banner ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          data-interval="0.3"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
            />
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
            />
            <li
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
            />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={headphone} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={book} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={mobile} className="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section> */}
      <div className="ecomerce-gif">
        <img src={foodbanner2} width="1300rem" height="500px"></img>
      </div>

      <div className="ecomerce-gif">
        <img src={foodbanner} width="1300rem" height="500px"></img>
      </div>
      <marquee>
        <h4>
          <bold>
            <i>
              Want a delicious meal, but no time we will deliver it hot and
              yummy.
            </i>
          </bold>
        </h4>
      </marquee>
      {/* <div className="round-card">
        <img className="round-card" src={card1}></img>
        <img className="round-card" src={card2}></img>
        <img className="round-card" src={card3}></img>
        <img className="round-card" src={card4}></img>
      </div> */}
      <div className="row">{renderProducts()}</div>
    </div>
  );
}
