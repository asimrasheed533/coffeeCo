import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Checkout() {
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [streetAddressError, setStreetAddressError] = useState("");
  const [cityTown, setCityTown] = useState("");
  const [cityTownError, setCityTownError] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [zipCodeError, setZipCodeError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handelCheckOut(e) {
    e.preventDefault();
    if (!country) {
      setCountryError(" Select Country");
    }
    if (!firstName) {
      setFirstNameError(" Enter First Name");
    }
    if (!lastName) {
      setLastNameError(" Enter Last Name");
    }
    if (!companyName) {
      setCompanyNameError(" Enter Company Name");
    }
    if (!streetAddress) {
      setStreetAddressError(" Enter Street Address");
    }
    if (!cityTown) {
      setCityTownError(" Enter City Town");
    }
    if (!zipCode) {
      setZipCodeError(" Enter Zip Code");
    }
    if (!number) {
      setNumberError(" Enter Number");
    }
    if (!email) {
      setEmailError(" Enter Email");
    }
    if (
      country &&
      firstName &&
      lastName &&
      companyName &&
      streetAddress &&
      cityTown &&
      zipCode &&
      number &&
      email &&
      email.includes("@") &&
      email.includes(".")
    ) {
      setCountryError("");
      setFirstName("");
      setLastNameError("");
      setCompanyNameError("");
      setStreetAddressError("");
      setCityTownError("");
      setZipCodeError("");
      setNumberError("");
      setEmailError("");
      setCountry("");
      setFirstName("");
      setLastName("");
      setCompanyName("");
      setStreetAddress("");
      setCityTown("");
      setZipCode("");
      setNumber("");
      setEmail("");
    }
  }

  return (
    <>
      <div className="checkout__container">
        <div className="checkout__container__heading">Checkout</div>
        <div className="checkout__content__main">
          <div className="checkout__content__wraper__from">
            <div className="checkout__from__heading">Shipping Address</div>
            <div className="checkout__input__wraper">
              <div className="checkout__input__label">Country</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Select Country"
                value={country}
                error={countryError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setCountryError("Please Select Country");
                  } else {
                    setCountryError("");
                  }
                  setCountry(e.target.value);
                }}
              />
              {countryError !== "" ? (
                <div className="checkout__input__error">{countryError}</div>
              ) : null}
            </div>
            <div className="checkout__input__wraper__name">
              <div className="checkout__input__wraper__name__entry">
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
              <div className="checkout__input__wraper__name__entry">
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
            <div className="checkout__input__wraper">
              <div className="checkout__input__label">Company Name </div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Name"
                value={companyName}
                error={companyNameError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setCompanyNameError(" Enter Company Name");
                  } else {
                    setCompanyNameError("");
                  }
                  setCompanyName(e.target.value);
                }}
              />
              {companyNameError !== "" ? (
                <div className="checkout__input__error">{companyNameError}</div>
              ) : null}
            </div>
            <div className="checkout__input__wraper">
              <div className="checkout__input__label">Street Address</div>
              <input
                className="checkout__input__entry"
                type="text"
                placeholder="Enter Address"
                value={streetAddress}
                error={streetAddressError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setStreetAddressError(" Enter Street Address");
                  } else {
                    setStreetAddressError("");
                  }
                  setStreetAddress(e.target.value);
                }}
              />
              {streetAddressError !== "" ? (
                <div className="checkout__input__error">
                  {streetAddressError}
                </div>
              ) : null}
            </div>
            <div className="checkout__input__wraper">
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
            <div className="checkout__input__wraper">
              <div className="checkout__input__label">Zip code</div>
              <input
                className="checkout__input__entry"
                type="number"
                placeholder="Enter Code"
                value={zipCode}
                error={zipCodeError}
                onChange={(e) => {
                  if (!e.target.value) {
                    setZipCodeError(" Enter Zip Code");
                  } else {
                    setZipCodeError("");
                  }
                  setZipCode(e.target.value);
                }}
              />
              {zipCodeError !== "" ? (
                <div className="checkout__input__error">{zipCodeError}</div>
              ) : null}
            </div>
            <div className="checkout__input__wraper">
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
            <div className="checkout__input__wraper">
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
      <div className="checkout__btn__wraper">
        <button className="checkout__btn" onClick={handelCheckOut}>
          Place Order
        </button>
      </div>
    </>
  );
}
