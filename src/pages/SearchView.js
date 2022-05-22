import React from "react";
import Button from "../components/Button";
import ListProducts from "../components/ListProducts";

const SearchView = ({ data, handlePrevPage, handleNextPage }) => {
  return (
    <div className="w-full h-full py-10 flex flex-col justify-center">
      <ListProducts data={data?.results} />
      <div className="flex justify-center gap-5 pt-5 pb-10">
        <Button
          value={"Previous"}
          onClick={handlePrevPage}
          handlePrevPage={handlePrevPage}
          className={
            "bg-mercadolibre px-2 py-1 shadow-gray-400 shadow-sm rounded-md"
          }
        />
        <Button
          value={"Next"}
          onClick={handleNextPage}
          handleNextPage={handleNextPage}
          className={
            "bg-mercadolibre px-2 py-1 shadow-gray-400 shadow-sm rounded-md"
          }
        />
      </div>
      )
    </div>
  );
};

export default SearchView;
