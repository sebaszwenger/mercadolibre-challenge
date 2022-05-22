import React from "react";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`}>
      <li className="p-2 border-b flex items-center justify-between">
        <div className="flex items-center justify-start gap-5 pr-5">
          <div className="max-w-[250px] pl-3">
            <img src={item?.thumbnail} alt={item?.title} width={250} />
          </div>

          <div className="flex flex-col">
            <p className="text-2xl mt-2 font-bold">$ {item?.price}</p>
            <p className="mt-2 text-lg">{item?.title}</p>
          </div>
        </div>
        <div className="pr-3">
          <p className="text-xs">{item?.address.state_name}</p>
        </div>
      </li>
    </Link>
  );
};

export default Product;
