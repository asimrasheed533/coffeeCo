import React from "react";
import BtnComponent from "../components/BtnComponent";
import { Link } from "react-router-dom";

export default function ProductCard({
  imgURL,
  name,
  oldPrice,
  newPrice,
  offer,
  toPath,
}) {
  return (
    <Link to="/product-details" className="product__card">
      <img
        src={imgURL}
        alt="product__card__img"
        className="product__card__img"
        loading="lazy"
      />
      <div className="product__card__content">
        <div className="product__card__content__offer">
          <span className="span__offer">{offer}%</span>
          <span>OFF</span>
        </div>
        <div className="product__card__content__name">{name}</div>
        <div className="product__card__content__price">
          <div className="product__card__content__old__price">{oldPrice}</div>
          <div className="product__card__content__new__price">{newPrice}</div>
        </div>
        <BtnComponent
          placeholder="Add to Cart"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.452"
              height="20.614"
              viewBox="0 0 21.452 20.614"
            >
              <g
                id="Icon_feather-shopping-cart"
                data-name="Icon feather-shopping-cart"
                transform="translate(1.5 1.5)"
              >
                <path
                  id="Path_636"
                  data-name="Path 636"
                  d="M13.677,30.839A.839.839,0,1,1,12.839,30,.839.839,0,0,1,13.677,30.839Z"
                  transform="translate(-6.129 -14.064)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_637"
                  data-name="Path 637"
                  d="M30.177,30.839A.839.839,0,1,1,29.339,30,.839.839,0,0,1,30.177,30.839Z"
                  transform="translate(-13.403 -14.064)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_638"
                  data-name="Path 638"
                  d="M1.5,1.5H4.855L7.1,12.731a1.677,1.677,0,0,0,1.677,1.35h8.153a1.677,1.677,0,0,0,1.677-1.35l1.342-7.037H5.694"
                  transform="translate(-1.5 -1.5)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          }
          btnStyle={{
            width: "80%",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "-30px",
          }}
        />
      </div>
    </Link>
  );
}
