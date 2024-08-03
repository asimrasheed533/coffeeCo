import React from "react";

export default function BtnComponent({
  placeholder,
  btnStyle,
  icon,
  type,
  onClick,
}) {
  return (
    <button
      className="form__btn"
      style={btnStyle}
      type={type}
      onClick={onClick}
    >
      {placeholder}
      {icon}
    </button>
  );
}
