"use client"

import { Accordion, AccordionItem } from "@nextui-org/react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";
import PriceRange from "./PriceRange/PriceRange";
import Brand from './Brand';
import ProcessorType from "./ProcessorType";
import ProcessorModel from "./ProcessorModel";

const ShopSideBar = () => {
    const itemClasses = {
        root: 'my-accordion-item',
        header: 'my-accordion-header',
        content: 'my-accordion-content',
    }

    return (
        <Accordion className="!px-0 !gap-5" itemClasses={itemClasses} variant="splitted" selectionMode="multiple" defaultSelectedKeys={`all`} isCompact>
            <AccordionItem
                className='!shadow'
                key="1"
                aria-label="Price"
                title={<span className="font-semibold">Price</span>}
                indicator={({ isOpen }) => (isOpen ? <TbMinusVertical /> : <BsPlusLg />)}
            >
                <PriceRange />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="2"
                aria-label="Brand"
                title={<span className="font-semibold">Band</span>}
                indicator={({ isOpen }) => (isOpen ? <TbMinusVertical /> : <BsPlusLg />)}
            >
                <Brand />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="3"
                aria-label="Processor Type"
                title={<span className="font-semibold">Processor Type</span>}
                indicator={({ isOpen }) => (isOpen ? <TbMinusVertical /> : <BsPlusLg />)}
            >
                <ProcessorType />
            </AccordionItem>
            <AccordionItem
                className='!shadow'
                key="4"
                aria-label="Processor Model"
                title={<span className="font-semibold">Processor Model</span>}
                indicator={({ isOpen }) => (isOpen ? <TbMinusVertical /> : <BsPlusLg />)}
            >
                <ProcessorModel />
            </AccordionItem>
        </Accordion >
    );
};

export default ShopSideBar;