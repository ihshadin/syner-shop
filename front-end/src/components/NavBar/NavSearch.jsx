import { Input } from '@nextui-org/react';
import React from 'react';
import { SearchIcon } from './SearchIcon';

const NavSearch = () => {
    return (
        <Input
          classNames={{
            base: "w-full md:w-[38rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal border focus:border-2",
          }}
          placeholder="Type to search..."
          size="sm"
          endContent={<SearchIcon size={18} />}
        //   startContent={}
          type="search"
        />

    );
};

export default NavSearch;