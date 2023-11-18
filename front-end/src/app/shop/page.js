import React from 'react';
import ProductCard from '@/components/Cards/ProductCard';
import ProductSortingMenu from './ProductSortingMenu';
import ShopSideBar from '@/components/ShopSideBar/ShopSideBar';

const ShopPage = () => {
    return (
        <section className='py-10 md:py-16 lg:py-28'>
            <div className="syner-container flex gap-3">
                <div className='basis-1/4'>
                    <ShopSideBar />
                </div>
                <div className='basis-3/4'>
                    <div className='flex justify-between items-center rounded-lg mb-5 py-2 px-4 border syner-secondary-border'>
                        <p><span className='font-bold'>19 </span> Products found</p>
                        <ProductSortingMenu />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopPage;