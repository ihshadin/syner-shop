import SectionTitle from "@/components/Titles/SectionTitle";
import React from "react";

const WishListPage = () => {
  return (
    <>
      <section className="py-10 md:py-16 lg:py-24">
        <div className="syner-container">
          <SectionTitle
            title={"Dream Collection"}
            subTitle={"Wishful Products"}
          />
        </div>
      </section>
    </>
  );
};

export default WishListPage;
