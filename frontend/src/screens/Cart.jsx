import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToCart } from "../features/cartSlice";
export default function Cart() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);
  console.log("cart", cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const [istext, setIstext] = useState("");
  const [istexterror, setIstexterror] = useState("");
  console.log("cart", cart);

  function handelSubmit(e) {
    e.preventDefault();
    if (!istext) {
      setIstexterror("Enter Text Here...");
    } else {
      navigate("/checkout");
    }
  }
  return (
    <>
      <div className="cart__heading">SHOPPING CART</div>
      <div className="cart__container">
        <div className="cart__container__left">
          {cart.map((i) => (
            <CartItem cart={i} />
          ))}
        </div>
        <div className="cart__container__right">
          <div className="cart__container__text">
            Order special instructions PLEASE LEAVE SPECIAL INSTRUCTIONS ABOVE
          </div>

          <textarea
            value={istext}
            onChange={(e) => {
              if (!e.target.value) {
                setIstexterror("Enter Text Here...");
              } else {
                setIstexterror("");
              }
              setIstext(e.target.value);
            }}
            className="cart__container__right__note"
            cols="30"
            rows="10"
            placeholder="Add a note to your order..."
          />
          {istexterror !== "" ? (
            <div className="cart__container__right__note__error">
              {istexterror}
            </div>
          ) : null}
          <div className="sub__total">
            <div className="sub__total__heaidng">Subtotal</div>
            <div className="sub__total__price">Rs:15,190</div>
          </div>
          <div className="sub__total__subheaidng">
            Taxes and shipping calculated at checkout
          </div>
          <Link to="/" className="sub__total__btn">
            Continue Shopping
          </Link>
          <button onClick={handelSubmit} className="sub__total__btn__checkout">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

function CartItem({ cart }) {
  console.log("cart i nitem", cart);
  const dispatch = useDispatch();
  return (
    <div className="cart__container__left__item">
      <div className="cart__container__left__item__col">
        <div className="cart__container__left__col__img">
          <img src={cart.image} alt="cart" loading="lazy" />
        </div>
        <div className="cart__container__left__col__content">
          <div className="cart__container__left__name__wraper">
            <div className="cart__container__left__col__name">{cart.name}</div>
          </div>

          <div className="cart__item__price">
            <div className="cart__item__Heading">Item Price</div>
            <div className="cart__item__total__price">Rs: {cart.price}</div>
          </div>
          <div className="cart__item__price">
            <div className="cart__item__Heading">Item Quantity</div>
            <div className="cart__item__total__price">{cart.quantity}</div>
          </div>
        </div>
      </div>
      <div className="cart__container__left__item__col">
        <div
          onClick={() => dispatch(removeToCart(cart))}
          className="trach__item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}
