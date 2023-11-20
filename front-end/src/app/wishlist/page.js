import React from "react";
import SectionTitle from "@/components/Titles/SectionTitle";
import WishlistProducts from "./WishlistProducts";

const WishListPage = () => {
  return (
    <>
      <section className="pt-10 md:pt-16 lg:pt-24">
        <div className="syner-container">
          <SectionTitle
            title={"Dream Collection"}
            subTitle={"Wishful Products"}
          />
        </div>
      </section>
      <section className="pt-5 md:pt-8 lg:pt-12 pb-10 md:pb-16 lg:pb-28">
        <div className="syner-container">
          <WishlistProducts />
        </div>
      </section>
    </>
  );
};

export default WishListPage;
