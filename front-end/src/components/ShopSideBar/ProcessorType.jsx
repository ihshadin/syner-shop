import { Checkbox } from '@nextui-org/react';
import React from 'react';

const ProcessorType = () => {
    return (
        <div className='flex flex-col gap-1 pb-3'>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Intel</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>AMD</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Apple</Checkbox>
            <Checkbox size="sm" color="success" className='p-0 m-0'>Microsoft</Checkbox>
        </div>
    );
};

export default ProcessorType;