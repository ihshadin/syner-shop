import { Checkbox } from '@nextui-org/react';
import React from 'react';

const ProcessorModel = () => {
    return (
        <div className='flex flex-col gap-1 pb-3'>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel CDC</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel PQC</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel Core i3</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel Core i5</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel Core i7</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel Core i9</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD Athlon</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD Ryzen 3</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD Ryzen 5</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD Ryzen 7</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD Ryzen 9</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Apple M1</Checkbox>
        </div>
    );
};

export default ProcessorModel;