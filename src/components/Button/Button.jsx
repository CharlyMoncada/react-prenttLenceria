import React from "react";
// import "./_cart.scss";

const Button = ({ onClick, label }) => {
  return (
    <button className="btn-counter" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
