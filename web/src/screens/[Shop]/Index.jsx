import React, { useLayoutEffect, useState } from "react";

import { useLocation, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useQuery from "../../utils/useQuery";
import SliderBanner from "../../components/SliderBanner";

export default function Shop() {
  const { pathname, state } = useLocation();
  const path = pathname.split("/")[1];
  const [isActive, setIsActive] = useState(0);
  const { data } = useQuery("/products");
  return (
    <>
      <div className="shop__main__banner">
        <SliderBanner />
      </div>

      <div className="shop__products__container">
        <div className="shop__products__filter__warper">
          <div className="shop__filter__heading">
            Total Products: <span>{data?.length}</span>
          </div>
          <div className="shop__filter__items">
            <button
              className={`shop__filter__item ${
                isActive === 3 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(3);
                const sortedData = [...filterData];
                sortedData.sort((a, b) => a.price - b.price);
                setFilterData(sortedData);
              }}
            >
              Small to heigh Price
            </button>
            <button
              className={`shop__filter__item ${
                isActive === 4 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(4);
                const sortedData = [...filterData];
                sortedData.sort((a, b) => b.price - a.price);
                setFilterData(sortedData);
              }}
            >
              Heigh to small Price
            </button>
          </div>
        </div>
        <div className="shop__products__items">
          {data?.length > 0 ? (
            data?.map((item) => <ProductCard item={item} key={item.id} />)
          ) : (
            <div className="no-data">No products available.</div>
          )}
        </div>
      </div>
    </>
  );
}

function ProductCard({ item }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={`${item.id}`}
      state={item}
      className="item__container__filter"
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
      <div className="item__filter__container__img">
        <img src={item.img} alt="coffee" loading="lazy" />
      </div>
      <div className="item__container__name__warper">
        <div className="item__container__name">{item.name}</div>
        <div className="item__container__price">Rs:{item.price}</div>
      </div>

      <div className="item__container__flavour">{item.flavour}</div>
    </Link>
  );
}
