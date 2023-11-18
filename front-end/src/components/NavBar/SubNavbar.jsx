'use client'
import Link from 'next/link';
import { FaCartPlus, FaCreditCard, FaHeart, FaShoppingBag, FaSignOutAlt, FaThumbsUp, FaTicketAlt, FaUser } from "react-icons/fa";

const SubNavbar = () => {

    const routers = [
        {
            path: '/products',
            title: 'Products',
            icon: <FaUser />
        },
        {
            path: '/orders',
            title: 'Orders',
            icon: <FaShoppingBag />
        },
        {
            path: '/transaction',
            title: 'Transaction',
            icon: <FaCreditCard />
        },
        {
            path: '/wishlist',
            title: 'Wishlist',
            icon: <FaHeart />
        },
        {
            path: '/my-cart',
            title: 'My Cart',
            icon: <FaCartPlus />
        },
        {
            path: '/vouchers',
            title: 'Vouchers',
            icon: <FaTicketAlt />
        },
        {
            path: '/my-reviews',
            title: 'My Reviews',
            icon: <FaThumbsUp />
        },
        {
            path: '/logout',
            title: 'Logout',
            icon: <FaSignOutAlt />

        },
    ]
    return (
        <div className="hidden md:block sticky bg-white z-40 top-0 shadow-md border-b border-gray-200">
            <div className="max-w-[1280px] w-full mx-auto px-3">
                <div className="py-2">
                    <ul className="flex items-center justify-between  text-md font-semibold text-gray-5 hover:text-gray-6 py-1 2xl:py-2">
                        {
                            routers.map((route, index) => <>
                                <li key={route.path}>
                                    <Link href={route?.path}>
                                        <span>
                                            {route?.title}
                                        </span>
                                    </Link>
                                </li>
                                {index < routers.length - 1 && <div className="w-[2px] h-5 bg-slate-300"></div>}
                            </>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;