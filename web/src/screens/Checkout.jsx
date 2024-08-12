import React, { useState } from "react";
import axios from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import successAnimation from "../assets/successAnimation.json";
import { clearCart } from "../features/cartSlice";

export default function Checkout() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [cityTownError, setCityTownError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    let valid = true;

    setFirstNameError("");
    setLastNameError("");
    setCityTownError("");
    setNumberError("");
    setEmailError("");

    if (!firstName) {
      setFirstNameError("Enter First Name");
      valid = false;
    }
    if (!lastName) {
      setLastNameError("Enter Last Name");
      valid = false;
    }
    if (!cityTown) {
      setCityTownError("Enter City Town");
      valid = false;
    }
    if (!number) {
      setNumberError("Enter Number");
      valid = false;
    }
    if (!email) {
      setEmailError("Enter Email");
      valid = false;
    }

    if (!valid) return;

    axios
      .post("/orders", {
        firstName,
        lastName,
        cityTown,
        number,
        email,
        products: cart,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(clearCart());

        setFirstName("");
        setLastName("");
        setCityTown("");
        setNumber("");
        setEmail("");

        setPopupVisible(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__container__heading">Checkout</div>
        <div className="checkout__content__main">
          <div className="checkout__content__warper__from">
            <div className="checkout__from__heading">Shipping Address</div>

            <div className="checkout__input__warper__name">
              <div className="checkout__input__warper__name__entry">
                <div className="checkout__input__label">First Name</div>
                <input
                  className="checkout__input__entry__name"
                  type="text"
                  placeholder="Enter Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (!e.target.value) {
                      setFirstNameError("Enter First Name");
                    } else {
                      setFirstNameError("");
                    }
                  }}
                />
                {firstNameError && (
                  <div className="checkout__input__error">{firstNameError}</div>
                )}
              </div>
              <div className="checkout__input__warper__name__entry">
                <div className="checkout__input__label">Last Name</div>
                <input
                  className="checkout__input__entry__name"
                  type="text"
                  placeholder="Enter Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (!e.target.value) {
                      setLastNameError("Enter Last Name");
                    } else {
                      setLastNameError("");
                    }
                  }}
                />
                {lastNameError && (
                  <div className="checkout__input__error">{lastNameError}</div>
                )}
              </div>
            </div>
            <div className="checkout__input__warper">
              <div className="checkout__input__label">City Town</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Address"
                value={cityTown}
                onChange={(e) => {
                  setCityTown(e.target.value);
                  if (!e.target.value) {
                    setCityTownError("Enter City Town");
                  } else {
                    setCityTownError("");
                  }
                }}
              />
              {cityTownError && (
                <div className="checkout__input__error">{cityTownError}</div>
              )}
            </div>

            <div className="checkout__input__warper">
              <div className="checkout__input__label">Number</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                  if (!e.target.value) {
                    setNumberError("Enter Number");
                  } else {
                    setNumberError("");
                  }
                }}
              />
              {numberError && (
                <div className="checkout__input__error">{numberError}</div>
              )}
            </div>
            <div className="checkout__input__warper">
              <div className="checkout__input__label">Email</div>
              <input
                className="checkout__input__entry"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!e.target.value) {
                    setEmailError("Enter Email");
                  } else {
                    setEmailError("");
                  }
                }}
              />
              {emailError && (
                <div className="checkout__input__error">{emailError}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="checkout__btn__warper">
        <button className="checkout__btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
      {popupVisible && (
        <div className="successful__popup">
          <div className="popup__content">
            <div className="popup__content___title">
              Order has been placed successfully!
            </div>
            {/* <img src={GifSuccess} alt="gif" /> */}
            <Lottie animationData={successAnimation} loop={false} />
            <button
              className="successful__popup__button"
              onClick={() => setPopupVisible(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
