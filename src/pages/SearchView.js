import React from "react";
import { YellowButton } from "../components/Button";
import ListProducts from "../components/ListProducts";

const SearchView = ({ data, handlePrevPage, handleNextPage, page }) => {
  return (
    <div className="w-full h-full py-10 flex flex-col justify-center">
      <ListProducts data={data?.results} />
      <div className="flex justify-center gap-5 pt-5 pb-10">
        {page > 0 && (
          <YellowButton
            text={"Previous"}
            onClick={handlePrevPage}
            handlePrevPage={handlePrevPage}
            className={"py-1 px-2"}
          />
        )}
        <YellowButton
          text={"Next"}
          onClick={handleNextPage}
          handleNextPage={handleNextPage}
          className={"py-1 px-2"}
        />
      </div>
      )
    </div>
  );
};

export default SearchView;
