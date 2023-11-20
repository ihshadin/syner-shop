import ProductCard from "@/components/Cards/ProductCard";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedProduct = () => {
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

  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {products.map((product) => (
            <SwiperSlide>
              <ProductCard key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default RelatedProduct;
