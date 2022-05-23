import React from "react";

export const Button = ({ text, ...props }) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {text}
    </button>
  );
};

export const YellowButton = (props) => {
  return (
    <Button
      {...props}
      className={`${props.className}
        " bg-mercadolibre shadow-gray-400 shadow-sm rounded-md`}
    />
  );
};

export const BuyButton = (props) => {
  return (
    <Button
      {...props}
      text={"Comprar"}
      className={`${props.className} 
        " bg-blue-500 text-white rounded-sm shadow shadow-blue-800 w-full`}
    />
  );
};
