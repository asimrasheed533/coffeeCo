import React, { Suspense } from "react";
import pr1 from "../assets/pr-01.png";
import useQuery from "../utils/useQuery";

import ProductCard from "@components/ProductCard";
import { Link } from "react-router-dom";

export default function Index() {
  const { data: categories, isLoading } = useQuery("/categories");
  const { data: products, isLoading: productIsLoading } = useQuery("/products");
  console.log("categories", categories, isLoading);
  console.log("products", products, productIsLoading);
  return (
    <>
      {/* <SliderBanner /> */}
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
            state={{ id: category._id }}
            className="categories__item"
            key={category._id}
          >
            <div className="categories__item__img">
              <img src={category.img} alt="fashion_style" />
            </div>
            <div className="categories__item__name">{category.name}</div>
          </Link>
        ))}
      </div>

      {/* //new arrival */}
      <div className="arrival__container">
        <div className="arrival__heading">New Arrivals</div>
        <div className="item__container__warper">
          {products
            // .filter((product) => product.type === "latest")
            ?.map((product) => (
              <CoffeeCard key={product._id} product={product} />
            ))}
        </div>
      </div>
      {/* <div className="arrival__container">
        <div className="arrival__heading">New Offer</div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="item__container__warper">
            <ProductCard
              imgURL={pr1}
              name="coffee cco"
              offer="20"
              oldPrice="200"
              newPrice="150"
            />
            <ProductCard
              imgURL={pr1}
              name="coffee cco"
              offer="20"
              oldPrice="200"
              newPrice="150"
            />
            <ProductCard
              imgURL={pr1}
              name="coffee cco"
              offer="20"
              oldPrice="200"
              newPrice="150"
            />
          </div>
        </Suspense>
      </div> */}
    </>
  );
}

function CoffeeCard({ product }) {
  return (
    <Link className="item__container">
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
        <img src={product.img} alt="fashion_style" loading="lazy" />
      </div>
      <div className="item__container__name">{product.name}</div>
      <div className="item__container__price">Rs:{product.price}</div>
    </Link>
  );
}
