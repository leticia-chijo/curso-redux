import { useEffect } from "react";
import FilterBar from "../../components/FilterBar";
import ProductListItem from "../../components/ProductListItem";
import { PageContainer, ListContainer } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { selectFilteredProducts } from "../../redux/filterSelectors";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (products.loading) {
    return <div>Loading...</div>;
  }

  if (products.error) {
    return <div> Erro: {products.error}</div>;
  }

  return (
    <PageContainer>
      <FilterBar />
      <ListContainer>
        {filteredProducts.map((prod) => (
          <ProductListItem key={prod.id} product={prod} />
        ))}
      </ListContainer>
    </PageContainer>
  );
}
