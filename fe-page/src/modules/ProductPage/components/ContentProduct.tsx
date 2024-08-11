import React from "react";

import CardProduct from "@/components/CardProduct";
import Loading from "@/components/Loading";
import { ProductContext } from "@/context/productContex";
import { IProduct } from "@/types/common";

interface IContent {
  dataProductFilter: IProduct[];
  onSetFilterProduct: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ContentProduct: React.FC<IContent> = ({
  dataProductFilter,
  onSetFilterProduct,
}) => {
  const productContext = React.useContext(ProductContext);
  const { isLoading, dataProduct } = productContext;
  
  React.useEffect(() => {
    if (dataProduct) {
      onSetFilterProduct(dataProduct);
    }
  }, [dataProduct]);

  return (
    <div className="grid grid-cols-4 gap-5">
      {isLoading
        ? Array.from({ length: 8 }, (data, index) => <Loading key={index} />)
        : dataProductFilter?.map((product) => (
            <CardProduct
              key={product.id}
              idProduct={product.id}
              discount={product?.discount}
              image={product?.image}
              name={product?.name}
              priceOrigin={product?.priceOrigin}
              rating={product?.rating}
              isNewProduct={product?.isNewProduct}
              salePercent={product?.salePercent}
              countReview={product?.numReview}
            />
          ))}
    </div>
  );
};

export default ContentProduct;
