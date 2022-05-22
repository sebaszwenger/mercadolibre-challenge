import React from "react";

const ProductView = ({ data, categories, description }) => {
  return (
    <div className="bg-gray-200 w-full h-screen flex justify-center">
      <div className="mt-3">
        <div className="">
          <header className="text-gray-500 flex justify-start">
            {categories?.path_from_root?.map((category, i) => (
              <div key={i} className="mr-1">
                {category.name} {">"}
              </div>
            ))}
          </header>
        </div>

        <div className="bg-white  mt-3 mb-10 flex">
          <section className="pt-5 pl-10 pr-5 max-w-4xl">
            <div className="flex justify-center">
              <img
                src={data?.pictures[0]?.url}
                alt={data?.title}
                width={400}
                className="pb-40"
              />
            </div>
            <div className="">
              <h3 className="text-xl pb-5">Descripcion del producto</h3>
              <p className="text-gray-500 pb-7">{description?.plain_text}</p>
            </div>
          </section>

          <div className="pt-5 pr-5 max-w-xs">
            <p className="text-gray-800 py-2">
              <span>{data?.condition === "new" ? "Nuevo " : "Usado "}</span>-
              <span>
                {data?.initial_quantity - data?.available_quantity} Vendidos
              </span>
            </p>
            <h2 className="font-bold">{data?.title}</h2>
            <h2 className="text-3xl  pt-5 pb-8">$ {data?.price}</h2>
            <button
              type="text"
              className="bg-blue-500 text-white py-2 rounded-sm shadow shadow-blue-800 w-full"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
