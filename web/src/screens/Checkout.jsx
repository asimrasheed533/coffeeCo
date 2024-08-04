import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { useSelector } from "react-redux";

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
  const cart = useSelector((state) => state.cart.items);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameError(" Enter First Name");
    }
    if (!lastName) {
      setLastNameError(" Enter Last Name");
    }

    if (!cityTown) {
      setCityTownError(" Enter City Town");
    }

    if (!number) {
      setNumberError(" Enter Number");
    }
    if (!email) {
      setEmailError(" Enter Email");
    }

    axios
      .post("/orders", {
        firstName,
        lastName,
        cityTown,
        number,
        email,
        products: cart,
      })
      .then((res) => console.log(res.data))
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
                  error={firstNameError}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setFirstNameError("Enter First Name");
                    } else {
                      setFirstNameError("");
                    }
                    setFirstName(e.target.value);
                  }}
                />
                {firstNameError !== "" ? (
                  <div className="checkout__input__error">{firstNameError}</div>
                ) : null}
              </div>
              <div className="checkout__input__warper__name__entry">
                <div className="checkout__input__label">Last Name</div>
                <input
                  className="checkout__input__entry__name"
                  type="text"
                  placeholder="Enter Name"
                  value={lastName}
                  error={lastNameError}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setLastNameError(" Enter Last Name");
                    } else {
                      setLastNameError("");
                    }
                    setLastName(e.target.value);
                  }}
                />
                {lastNameError !== "" ? (
                  <div className="checkout__input__error">{lastNameError}</div>
                ) : null}
              </div>
            </div>
            <div className="checkout__input__warper">
              <div className="checkout__input__label">City Town</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Address"
                value={cityTown}
                error={cityTownError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setCityTownError(" Enter City Town");
                  } else {
                    setCityTownError("");
                  }
                  setCityTown(e.target.value);
                }}
              />
              {cityTownError !== "" ? (
                <div className="checkout__input__error">{cityTownError}</div>
              ) : null}
            </div>

            <div className="checkout__input__warper">
              <div className="checkout__input__label">Number</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Number"
                value={number}
                error={numberError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setNumberError(" Enter Number");
                  } else {
                    setNumberError("");
                  }
                  setNumber(e.target.value);
                }}
              />
              {numberError !== "" ? (
                <div className="checkout__input__error">{numberError}</div>
              ) : null}
            </div>
            <div className="checkout__input__warper">
              <div className="checkout__input__label">Email</div>
              <input
                className="checkout__input__entry"
                type="email"
                placeholder="Enter Email"
                value={email}
                error={emailError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setEmailError(" Enter Email");
                  } else {
                    setEmailError("");
                  }
                  setEmail(e.target.value);
                }}
              />
              {emailError !== "" ? (
                <div className="checkout__input__error">{emailError}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="checkout__btn__warper">
        <button className="checkout__btn" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </>
  );
}
