import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchView from "./SearchView";
import useFetch from "../hooks/useSearch";

const Search = () => {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${searchValue}&offset=${
      page * 10
    }&limit=4`
  );

  function handleNextPage() {
    setPage((prevValue) => prevValue + 1);
  }
  function handlePrevPage() {
    setPage((prevValue) => prevValue - 1);
  }

  if (!data) return <h1>LOADING...</h1>;

  return (
    <SearchView
      data={data}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default Search;
