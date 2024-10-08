import React, { Suspense } from "react";
import useQuery from "../utils/useQuery";
import { Link } from "react-router-dom";
import AboutCard from "../components/AboutCard";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.png";

export default function Index() {
  const { data: categories, isLoading } = useQuery("/categories");
  const { data: products, isLoading: productIsLoading } = useQuery("/products");
  return (
    <>
      <div className="coffee__main__warper">
        <div className="coffee__main__warper__content">
          Enjoy Your <span>Coffee</span> Before Your Activity
        </div>
        <div className="coffee__main__banner__img">
          <img
            src="https://res.cloudinary.com/dsxbqyjwo/image/upload/v1720582294/qoov3lqjcbm0mrqc5ipy.webp"
            alt="coffee shop"
            loading="lazy"
          />
        </div>
      </div>
      <div className="categories__container__heading">Categories</div>
      <div className="categories__container">
        {categories?.map((category) => (
          <Link
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            to={`/${category.name}`}
            state={{ id: category.id }}
            className="categories__item"
            key={category.id}
          >
            <div className="categories__item__img">
              <img src={category.img} alt="coffee" />
            </div>
            <div className="categories__item__name">{category.name}</div>
          </Link>
        ))}
      </div>

      <div className="arrival__container">
        <div className="arrival__heading">New Arrivals</div>
        <div className="item__container__warper">
          {products
            ?.filter((product) => product.type === "latest")
            ?.map((product) => (
              <CoffeeCard key={product.id} product={product} />
            ))}
        </div>
      </div>
      <AboutCard
        image={about1}
        heading="Easy to Find, Easy to Buy"
        content1="Our journey began with a simple love for coffee and a mission to source the highest quality beans from sustainable farms. We pride ourselves on offering a diverse selection of rich, flavorful blends and single-origin coffees, ensuring every sip is a delightful experience. Whether you're a casual drinker or a coffee aficionado, "
        content2="our commitment to quality and freshness shines through in every product we offer. Join us in celebrating the art of coffee, one brew at a time."
      />
      <AboutCard
        image={about2}
        heading="Fast Shipping and Simple returns"
        content1="All orders are packaged and shipped out by our region-based authorized Honda dealers for quick transit times and the lowest shipping rates. The majority of the orders are shipped out within 3 business days to get the parts out to you as fast as possible."
        content2="Initiating returns are simple and easy with no hassle. All of the parts are returned back to an authorized Honda dealer for processing and inspection. If you have any questions or concerns on a return, feel free to give us a call and our returns department can provide you the most accurate information and walk you through it step by step if needed."
        reverse
      />
    </>
  );
}

function CoffeeCard({ product }) {
  return (
    <Link
      to={`/shop/${product.id}`}
      state={product}
      className="item__container"
    >
      <div className="product__frt__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="item__container__img">
        <img src={product.img} alt="coffee" loading="lazy" />
      </div>
      <div className="item__container__name">{product.title}</div>
      <div className="item__container__price">Rs:{product.price}</div>
    </Link>
  );
}
