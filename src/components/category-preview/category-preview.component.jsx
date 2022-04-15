import ProductCard from "../product-card/product-card.component";
import { CategoryPreviewComponent, CategoryPreviewContainer, CategoryPreviewLink } from "./category-preview.styles";

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryPreviewLink to={title}>{title.toUpperCase()}</CategoryPreviewLink>
      </h2>
      <CategoryPreviewComponent>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))
        }
      </CategoryPreviewComponent>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
