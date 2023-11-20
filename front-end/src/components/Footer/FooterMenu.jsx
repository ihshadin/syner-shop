import React from 'react';
import Image from "next/image";
import logo from "@/assets/logo/syner-shop-color.png";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaWhatsappSquare} from 'react-icons/fa';

const FooterMenu = () => {
    return (
        <div>
            <div class="grid  md:grid-cols-4 gap-4 p-10 syner-container">
            <div class="flex flex-col space-y-4 pe-8 ">
            <Image className="w-36" src={logo} />
           <p className='pt-2 text-base'>The team at Without A Trace has over 25 years of experience in the janitorial and sanitation industry. We are certified, licensed, and bonded.</p>
           
          </div>

          <div class="flex flex-col space-y-4">
            <h2 class="font-bold text-base">Quick Link</h2>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-blue-600">
                Shop
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Store List
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                My Orders
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Become a Seller
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Export/Import Business
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Contact Us
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                About Us
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col space-y-4">
            <h2 class="font-bold text-base">Company</h2>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-blue-600">
                Desktop PC
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Laptop
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Smartphones
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Tablet
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Game Controller
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Audio & Video
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Wireless Speaker
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-600">
                Drone
                </a>
              </li>
            </ul>
          </div>

          

          <div class="flex flex-col space-y-4 ">
            <h2 class="font-bold text-base">Contact us</h2>
            <ul class="space-y-2 text-sm">
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
            <FaFacebookSquare />
            <FaTwitterSquare/>
            <FaInstagramSquare/>
            <FaWhatsappSquare/>
            </div>
          </div>
        </div>
        </div>
    );
};

export default FooterMenu;