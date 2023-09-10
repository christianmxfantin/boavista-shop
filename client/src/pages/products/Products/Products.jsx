import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ProductContainer,
  ProductFilters,
  ProductData,
  ProductListContainer,
  ProductListItem,
} from "./Products.styles";
import useProducts from "../../../hooks/api/useProducts";
import useCategories from "../../../hooks/api/useCategories";
import useDiscounts from "../../../hooks/api/useDiscounts";

import ProductFilter from "../../../components/products/ProductFilter";
import ProductItem from "../../../components/products/ProductItem/ProductItem";
import ProductTitle from "../../../components/products/ProductTitle/ProductTitle";
import EmptyData from "../../../components/layout/EmptyData/EmptyData";

const Products = () => {
  const { products, getProducts } = useProducts();
  const { categories, getCategories } = useCategories();
  const { discounts, getDiscounts } = useDiscounts();

  useEffect(() => {
    getProducts();
    getCategories();
    getDiscounts();
  }, []);

  //crear array de categorias para poner en el select
  const categoriesID = [
    ...new Set(products.map((product) => product.categoryId)),
  ];
  const categoriesData = categories.filter((category) =>
    categoriesID.includes(category.id)
  );

  //crear array de descuentos para poner en el select
  const discountsID = [
    ...new Set(products.map((product) => product.discountId)),
  ];
  const discountsData = discounts.filter(
    (discount) => discountsID.includes(discount.id) && discount.percentage !== 0
  );

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 0]);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [list, setList] = useState(products);
  const [resultsFound, setResultsFound] = useState(true);

  const applyFilters = () => {
    let updatedList = products;
    // console.log(updatedList);

    //Order Filter
    if (selectedOrder === 3) {
      updatedList = updatedList.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      console.log(updatedList);
    }
    if (selectedOrder === 2) {
      updatedList = updatedList.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      console.log(updatedList);
    }

    //Category Filter
    if (selectedCategory && selectedCategory !== 1) {
      const categoryID = categories.find(
        (category) => category.name === selectedCategory
      );
      updatedList = updatedList.filter(
        (product) => product.categoryId === categoryID.id
      );
    }

    //Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    if (selectedPrice && minPrice !== 0) {
      updatedList = updatedList.filter(
        (product) => parseFloat(product.price) >= parseFloat(minPrice)
      );
    }

    if (selectedPrice && maxPrice !== 0) {
      updatedList = updatedList.filter(
        (product) => parseFloat(product.price) <= parseFloat(maxPrice)
      );
    }

    //Discount Filter
    if (selectedDiscount && selectedDiscount !== 1 && selectedDiscount !== 2) {
      const discountID = discounts.find(
        (discount) => discount.percentage === selectedDiscount
      );
      updatedList = updatedList.filter(
        (product) => product.discountId === discountID.id
      );
    }

    //Mostrar productos sin descuento
    if (selectedDiscount === 2) {
      const discountID = discounts.find(
        (discount) => discount.percentage === 0
      );
      updatedList = updatedList.filter(
        (product) => product.discountId === discountID.id
      );
    }

    //Deseleccionar Categoria
    if (selectedCategory === 1) {
      setSelectedCategory(null);
    }

    //Deseleccionar Descuentos
    if (selectedDiscount === 1) {
      setSelectedDiscount(null);
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [
    products,
    selectedOrder,
    selectedCategory,
    selectedPrice,
    selectedDiscount,
  ]);

  let { search } = useLocation();
  let searchData = decodeURIComponent(search.slice(3).replace(/\+/g, " "));

  let searchProducts = Object.values(products).filter(
    (product) =>
      product.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, () => "") ===
      searchData
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, () => "")
  );

  return (
    <ProductContainer component={"main"}>
      <ProductFilters component={"aside"}>
        <ProductFilter
          categories={categoriesData}
          discounts={discountsData}
          setSelectedCategory={setSelectedCategory}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          setSelectedDiscount={setSelectedDiscount}
        />
      </ProductFilters>
      <ProductData component={"section"}>
        {!resultsFound ? (
          <EmptyData iconName="products" size={180} title="productos" />
        ) : (
          <>
            <ProductTitle
              search={search && searchData}
              category={selectedCategory}
              totResults={search ? searchProducts.length : list.length}
              setSelectedOrder={setSelectedOrder}
            />
            <ProductListContainer container spacing={3}>
              {!searchData
                ? list.map((product) => (
                    <ProductListItem item key={product.id}>
                      <ProductItem data={product} />
                    </ProductListItem>
                  ))
                : products.map((product) => (
                    <ProductListItem item key={product.id}>
                      <ProductItem data={product} />
                    </ProductListItem>
                  ))}
            </ProductListContainer>
          </>
        )}
      </ProductData>
    </ProductContainer>
  );
};

export default Products;
