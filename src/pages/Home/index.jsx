import { Card } from "../../components/ItemCard";
import { Layout } from "../../components/Layout";
import { useGetAllProducts } from "../../hooks/useGetProducts";
import { ProductDetail } from "../../components/ProductDetail";
import { useContext, useState } from "react";
import { CartContext } from "../../context";

const Home = () => {
  const { products } = useContext(CartContext);
  const [filtrado, setFiltrado] = useState(products);

  const getProducts = (e) => {
    const filteredProducts = products.filter((product) => {
      const productTitle = product.title.toLowerCase();
      const productSearched = e.target.value.toLowerCase();
      return productTitle.includes(productSearched);
    });

    setFiltrado(filteredProducts);
  };

  return (
    <Layout>
      <div className=" flex items-center justify-center relative 2-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input
        placeholder="Search a product"
        type="text"
        className="grid gap-4 grid-cols-4 w-80 text-center max-w-screen-lg border border-gray-500 focus:outline-none p-2 rounded-lg mb-4"
        onChange={getProducts}
      />

      <div className="grid gap-4 grid-cols-4 max-w-scree-lg">
        {filtrado?.map((el) => {
          return <Card product={el} key={el.id} />;
        })}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export { Home };
