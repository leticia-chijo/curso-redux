import FilterBar from "../../components/FilterBar";
import ProductListItem from "../../components/ProductListItem";
import { PageContainer, ListContainer } from "./styled";

export default function ProductsPage() {
  return (
    <PageContainer>
      <FilterBar />
      <ListContainer>
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </ListContainer>
    </PageContainer>
  );
}
