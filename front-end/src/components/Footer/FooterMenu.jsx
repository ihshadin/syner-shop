import React from 'react';
import Image from "next/image";
import logo from "@/assets/logo/syner shop white-2.png";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa';

const FooterMenu = () => {
    return (
        <div>
            <div className="grid  md:grid-cols-9 gap-4 p-10 syner-container">
            <div className="flex flex-col col-span-3 space-y-4 pe-10 ">
            <Image className="w-36" src={logo} />
           <p className='pt-2 text-base text-white '>The team at Without A Trace has over 25 years of experience in the janitorial and sanitation industry. We are certified, licensed, and bonded.</p>
           
          </div>

          <div className="flex flex-col col-span-2 space-y-4">
            <h2 className="font-bold text-base text-white ">Quick Link</h2>
            <ul className="space-y-2 text-sm text-white  [&>li>a:hover]:text-[var(--primary-color)] [&>li>a:hover]:underline [&>li>a:hover]:underline-offset-4">
              <li>
                <a href="#" >
                Shop
                </a>
              </li>
              <li>
                <a href="#" >
                Store List
                </a>
              </li>
              <li>
                <a href="#" >
                My Orders
                </a>
              </li>
              <li>
                <a href="#">
                Become a Seller
                </a>
              </li>
              <li>
                <a href="#">
                Export/Import Business
                </a>
              </li>
              <li>
                <a href="#">
                Contact Us
                </a>
              </li>
              <li>
                <a href="#">
                About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col col-span-2 space-y-4">
            <h2 className="font-bold text-base text-white ">Company</h2>
            <ul className="space-y-2 text-sm text-white  [&>li>a:hover]:text-[var(--primary-color)] [&>li>a:hover]:underline [&>li>a:hover]:underline-offset-4">
              <li>
                <a href="#">
                Desktop PC
                </a>
              </li>
              <li>
                <a href="#">
                Laptop
                </a>
              </li>
              <li>
                <a href="#">
                Smartphones
                </a>
              </li>
              <li>
                <a href="#" >
                Tablet
                </a>
              </li>
              <li>
                <a href="#" >
                Game Controller
                </a>
              </li>
              <li>
                <a href="#" >
                Audio & Video
                </a>
              </li>
              <li>
                <a href="#">
                Wireless Speaker
                </a>
              </li>
              <li>
                <a href="#" >
                Drone
                </a>
              </li>
            </ul>
          </div>

          

          <div className="flex flex-col col-span-2 space-y-4 ">
            <h2 className="font-bold text-base text-white ">Contact us</h2>
            <ul className="space-y-2 text-sm text-white ">
              <li>
                <p>Call us 24/7</p>
              </li>
              <li>
              <p>Togo: +(228) 991 832 32</p>
              </li>
              <li>
              <p>France: +(33) 7 584 088 01</p>
              </li>
              <li>
              <p>Germany: +(49) 1521 458 0309</p>
              </li>
              <li>
              <p>USA: +1(302) 329 8160</p>
              </li>
              <li>
              <p>Email: support@synershop.com</p>
              </li>
            </ul>
            <div className='flex gap-2 text-xl'>
            <FaFacebookSquare className='text-[#4267B2]' />
            <FaTwitterSquare className='text-[#1DA1F2]'/>
            <FaInstagramSquare className='text-[#4e58cd]'/>
            <FaWhatsappSquare className='text-[#128c7e]'/>
            </div>
          </div>
        </div>
        </div>
    );
};

export default FooterMenu;