"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
  Button,
} from "@nextui-org/react";
import { BsEye, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import image1 from "@/assets/images/product-image-1.jpg";
import Image from "next/image";
import PrimaryBtn from "@/components/Buttons/PrimaryBtn";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
const WishlistProducts = () => {
  return (
    <div>
      <Table
        isStriped
        aria-label="Example table static collection with custom cells"
      >
        <TableHeader className="">
          <TableColumn className="syner-secondary-bg syner-white">
            Actions
          </TableColumn>
          <TableColumn className="syner-secondary-bg syner-white">
            Image
          </TableColumn>
          <TableColumn className="syner-secondary-bg syner-white">
            Product Name
          </TableColumn>
          <TableColumn className="syner-secondary-bg syner-white">
            Unit Price
          </TableColumn>
          <TableColumn className="syner-secondary-bg syner-white text-center">
            Stock
          </TableColumn>
          <TableColumn className="syner-secondary-bg syner-white text-center">
            Purchase
          </TableColumn>
          {/* <TableColumn className="syner-secondary-bg syner-white">
            Actions
          </TableColumn> */}
        </TableHeader>
        <TableBody>
          <TableRow key={1}>
            <TableCell>
              {/* <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <BsEye />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <BsTrash />
                  </span>
                </Tooltip>
              </div> */}
              <div className="relative flex justify-center items-center">
                <Dropdown className="bg-background border-1 border-default-200">
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" size="sm" variant="light">
                      <BsThreeDotsVertical className="text-default-400" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>
            <TableCell>
              <Image
                width={70}
                height={70}
                className="min-w-[60px] w-[60px] h-[70px] object-cover"
                src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                alt="Product Image"
              />
            </TableCell>
            <TableCell>
              <div>
                <p className="min-w-[300px] font-bold text-base">
                  Men’s Early Winter Premium Jacket – Sheroon
                </p>
                <p className="line-clamp-2 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  perferendis dolore reiciendis dolorem, quam aliquid enim
                  voluptate maxime nam quaerat nesciunt rerum culpa esse nulla
                  omnis eaque temporibus aut. Accusantium cum, ad odit harum
                  porro consectetur enim ipsum ducimus, laborum ut tenetur
                  necessitatibus inventore fugiat, aperiam sapiente voluptatibus
                  vero et.
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p className="text-base leading-4 font-bold">1699</p>
                <p className="text-xs line-through">2100</p>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <p className="text-green-500 min-w-[70px]">In Stock</p>
            </TableCell>
            <TableCell>
              <div className="min-w-[170px] w-[170px] mx-auto">
                <PrimaryBtn btnType={"syner-solid"} />
              </div>
            </TableCell>
            {/* <TableCell> */}
            {/* <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <BsEye />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <BsTrash />
                  </span>
                </Tooltip>
              </div> */}
            {/* <div className="relative flex justify-end items-center gap-2">
                <Dropdown className="bg-background border-1 border-default-200">
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" size="sm" variant="light">
                      <BsThreeDotsVertical className="text-default-400" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div> */}
            {/* </TableCell> */}
          </TableRow>
          <TableRow key={2}>
            <TableCell>
              {/* <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <BsEye />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <BsTrash />
                  </span>
                </Tooltip>
              </div> */}
              <div className="relative flex justify-center items-center">
                <Dropdown className="bg-background border-1 border-default-200">
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" size="sm" variant="light">
                      <BsThreeDotsVertical className="text-default-400" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </TableCell>
            <TableCell>
              <Image
                width={70}
                height={70}
                className="min-w-[60px] w-[60px] h-[70px] object-cover"
                src={"https://i.ibb.co/rpZNfzK/sharoon.webp"}
                alt="Product Image"
              />
            </TableCell>
            <TableCell>
              <div>
                <p className="min-w-[300px] font-bold text-base">
                  Men’s Early Winter Premium Jacket – Sheroon
                </p>
                <p className="line-clamp-2 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  perferendis dolore reiciendis dolorem, quam aliquid enim
                  voluptate maxime nam quaerat nesciunt rerum culpa esse nulla
                  omnis eaque temporibus aut. Accusantium cum, ad odit harum
                  porro consectetur enim ipsum ducimus, laborum ut tenetur
                  necessitatibus inventore fugiat, aperiam sapiente voluptatibus
                  vero et.
                </p>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p className="text-base leading-4 font-bold">1699</p>
                <p className="text-xs line-through">2100</p>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <p className="text-green-500 min-w-[70px]">In Stock</p>
            </TableCell>
            <TableCell>
              <div className="min-w-[170px] w-[170px] mx-auto">
                <PrimaryBtn btnType={"syner-solid"} />
              </div>
            </TableCell>
            {/* <TableCell> */}
            {/* <div className="relative flex items-center gap-2">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <BsEye />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <BsTrash />
                  </span>
                </Tooltip>
              </div> */}
            {/* <div className="relative flex justify-end items-center gap-2">
                <Dropdown className="bg-background border-1 border-default-200">
                  <DropdownTrigger>
                    <Button isIconOnly radius="full" size="sm" variant="light">
                      <BsThreeDotsVertical className="text-default-400" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem>View</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div> */}
            {/* </TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default WishlistProducts;
