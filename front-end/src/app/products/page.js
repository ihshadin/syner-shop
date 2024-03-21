import React from "react";
import ProductCard from "@/components/Cards/ProductCard";
import ProductSortingMenu from "./ProductSortingMenu";
import ShopSideBar from "@/components/ShopSideBar/ShopSideBar";
import { Pagination } from "@nextui-org/react";

const products = [
  {
    id: 1,
    name: "Men’s Early Winter Premium Jacket – Sheroon",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/rpZNfzK/sharoon.webp",
  },
  {
    id: 2,
    name: "Half Sleeves Sports Jersey T-Shirt",
    reg_price: 400,
    self_price: 299,
    category: "Jackat fashions",
    productImage: "https://i.ibb.co/825zZHv/SKP05956-scaled.webp",
  },
  {
    id: 3,
    name: "High Quality Premium Jacket For Men – Cuket",
    reg_price: 2400,
    self_price: 1499,
    category: "Men's fashions",
    productImage:
      "https://i.ibb.co/yF8MJCv/Mens-High-Quality-Early-Winter-Premium-Jacket-Reversible-jacket-Sheroon.webp",
  },
  {
    id: 4,
    name: "Outwear Authentic Men’s Full Sleeve O-Neck T-Shirt (Navy)",
    reg_price: 2400,
    self_price: 1499,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/dWQmFkg/CMTHP-COP-black.webp",
  },
  {
    id: 5,
    name: "Men’s Early Winter Premium Jacket – Sheroon",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/6RccWtz/j10.webp",
  },
  {
    id: 6,
    name: "Polo Shirt – 100% Cotton summer comfortable wear",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/q9kBW37/main005.webp",
  },
  {
    id: 7,
    name: "Men’s Early Winter Premium Jacket – Sheroon",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/rpZNfzK/sharoon.webp",
  },
  {
    id: 8,
    name: "Half Sleeves Sports Jersey T-Shirt",
    reg_price: 400,
    self_price: 299,
    category: "Jackat fashions",
    productImage: "https://i.ibb.co/825zZHv/SKP05956-scaled.webp",
  },
  {
    id: 9,
    name: "High Quality Premium Jacket For Men – Cuket",
    reg_price: 2400,
    self_price: 1499,
    category: "Men's fashions",
    productImage:
      "https://i.ibb.co/yF8MJCv/Mens-High-Quality-Early-Winter-Premium-Jacket-Reversible-jacket-Sheroon.webp",
  },
  {
    id: 10,
    name: "Outwear Authentic Men’s Full Sleeve O-Neck T-Shirt (Navy)",
    reg_price: 2400,
    self_price: 1499,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/dWQmFkg/CMTHP-COP-black.webp",
  },
  {
    id: 11,
    name: "Men’s Early Winter Premium Jacket – Sheroon",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/6RccWtz/j10.webp",
  },
  {
    id: 12,
    name: "Polo Shirt – 100% Cotton summer comfortable wear",
    reg_price: 2100,
    self_price: 1699,
    category: "Men's fashions",
    productImage: "https://i.ibb.co/q9kBW37/main005.webp",
  },
];

const ProductsPage = () => {
  return (
    <>
      <section className="py-10 md:py-16 lg:py-24">
        <div className="syner-container flex flex-col md:flex-row gap-3 md:gap-5">
          <div className="md:basis-1/4">
            <ShopSideBar />
          </div>
          <div className="md:basis-3/4">
            <div className="flex justify-between items-center rounded-lg mb-3 md:mb-5 py-2 px-4 border syner-secondary-border">
              <p>
                <span className="font-bold">19 </span> Products found
              </p>
              <ProductSortingMenu />
            </div>
            <div className="grid gap-3 md:gap-5 items-stretch grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center pt-10">
              <Pagination
                showControls
                total={10}
                initialPage={1}
                classNames={{
                  wrapper: "gap-1 mx-auto",
                  item: "bg-transparent",
                  cursor: "syner-primary-bg syner-white font-bold",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
