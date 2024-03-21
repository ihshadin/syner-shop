"use client";
import React from "react";
import FooterMenu from "./FooterMenu";
import FooterCopyRight from "./FooterCopyRight";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer mt-10 syner-secondary-bg ">
        <NewsLatter/>
        <hr className="syner-primary-border syner-container pb-5"/>
        <FooterMenu/>
        <hr className="syner-primary-border syner-container pb-5"/>
        <FooterCopyRight/>
        
      </footer>
    </div>
  );
};

export default Footer;
