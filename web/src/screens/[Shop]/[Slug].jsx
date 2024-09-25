import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
export default function Detail() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="detail__container">
        <div className="detail__container__col__mobile">
          <img
            className="detail__container__col__main__image__mobile"
            src={state.img}
            alt="product men"
            loading="lazy"
          />
        </div>
        <div className="detail__container__col">
          <div className="detail__imgs__warper">
            <div className="detail__imgs__entry">
              <img src={state.img} alt="coffee" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="detail__container__col">
          <img
            className="detail__container__col__main__image"
            src={state.img}
            alt="product men"
            loading="lazy"
          />
        </div>

        <div className="detail__container__col">
          <div className="detail__container__name">{state.title}</div>
          <div className="detail__price__entry">
            <div className="detail__price">Rs.{state.price}</div>
            <div className="detail__price__free">FREE DELIVERY</div>
          </div>

          <div className="detail__quantity">
            <div className="detail__quantity__title">Quantity</div>
            <div className="detail__value">
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="detail__value__inc"
              >
                -
              </button>
              <div className="detail__value__num">{quantity}</div>
              <button
                className="detail__value__inc"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              if (cart.find((item) => item.id === state.id)) {
                alert("product already add");
              } else {
                dispatch(
                  addToCart({
                    id: state.id,
                    image: state.img,
                    size: size,
                    name: state.name,
                    price: state.price,
                    quantity: quantity,
                  })
                );
                alert("product is add");
              }
            }}
            className="add__cart__btn"
          >
            ADD TO Cart
          </button>
          <div className="disclaimer__title">Disclaimer</div>
          <div className="disclaimer__detail">{state.description}</div>
        </div>
      </div>
    </>
  );
}
