"use client"
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

const Language = () => {
  return (
    <div className="hidden md:flex w-28 flex-wrap md:flex-nowrap gap-4">
      <Select as="div" size="xs" placeholder="English" className="max-w-xs">
        <SelectItem>English</SelectItem>
        <SelectItem>Bangla</SelectItem>
      </Select>
    </div>
  );
};

export default Language;
