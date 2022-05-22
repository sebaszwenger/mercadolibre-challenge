import React from "react";
import Item from "./Item";

const ListProducts = ({ data }) => {
  return (
    <main className="mx-auto">
      <section className="bg-white rounded-sm shadow-sm shadow-gray-300 mx-5">
        <ul className="">
          {data?.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ListProducts;
