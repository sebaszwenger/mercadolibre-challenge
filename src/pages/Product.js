import { useParams } from "react-router-dom";
import useFetch from "../hooks/useSearch";
import ProductView from "./ProductView";

const Product = () => {
  const { id } = useParams();
  const { data } = useFetch(`https://api.mercadolibre.com/items/${id}`);
  const { data: description } = useFetch(
    `https://api.mercadolibre.com/items/${id}/description`
  );
  const { data: categories } = useFetch(
    `https://api.mercadolibre.com/categories/${data?.category_id}`
  );

  if (!data || !description || !categories) {
    return <div>Loading...</div>;
  }

  return (
    <ProductView
      data={data}
      categories={categories}
      description={description}
    />
  );
};

export default Product;
