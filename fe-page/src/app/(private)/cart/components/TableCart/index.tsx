"use client";
import React from "react";
import { useDebouncedValue } from "@mantine/hooks";

import axios from "../../../../../util/axios.customize";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { API_URL } from "@/types/common";
import { CartContext } from "@/context/cartContext";
import AlertDeleteCart from "./AlertDeleteCart";

const TableCart = () => {
  const cartContext = React.useContext(CartContext);
  const dataCart = cartContext?.dataCart;
  const subTotal = cartContext?.subTotal;
  const onSetSubTotal = cartContext?.setSubTotal;

  const [quantities, setQuantities] = React.useState<number[]>([]);
  const [index, setIndex] = React.useState<number>(0);
  const [idCartItem, setIdCartItem] = React.useState<string>();
  const [debouncedQuantities, setDebouncedQuantities] = React.useState<
    number[]
  >([]);
  const [debouncedValues] = useDebouncedValue(debouncedQuantities, 1500);

  React.useEffect(() => {
    if (dataCart) {
      const initialQuantities = dataCart.map((cart) => cart?.quantity || 0);
      setQuantities(initialQuantities);
      setDebouncedQuantities(initialQuantities);
    }
  }, [dataCart]);

  React.useEffect(() => {
    if (idCartItem) {
      const quantity = debouncedValues[index];
      handleUpdateCart(idCartItem, quantity);
    }
  }, [debouncedValues, idCartItem]);

  const handleQuantityChange = (index: number, value: number, id: string) => {
    const maxQuantity = dataCart && dataCart[index]?.product?.countInStock;
    setIndex(index);
    if (maxQuantity && (value < 0 || value > maxQuantity)) {
      return;
    }

    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
    setIdCartItem(id);

    const newDebouncedQuantities = [...debouncedQuantities];
    newDebouncedQuantities[index] = value;
    setDebouncedQuantities(newDebouncedQuantities);

    const newSubTotal = dataCart?.reduce((total, product, i) => {
      const price = product?.product?.discount ?? product?.product?.priceOrigin;
      return total + price * newQuantities[i];
    }, 0);

    if (newSubTotal !== undefined) {
      onSetSubTotal(newSubTotal);
    }
  };

  const handleUpdateCart = async (idCartItems: string, quantity: number) => {
    try {
      const response = await axios.patch(
        `${API_URL}/api/v1/carts/updateQuantity/${idCartItems}`,
        {
          quantity: quantity,
        }
      );

      if (response) {
        console.log("Cart updated successfully", response.data);
      }
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">#</TableHead>
          <TableHead className="font-sans text-sm text-center">
            Product
          </TableHead>
          <TableHead className="font-sans text-sm text-center">Price</TableHead>
          <TableHead className="font-sans text-sm text-center">
            Quantity
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Subtotal
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Cancel Product
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataCart?.map((product, index) => (
          <TableRow key={product?.id}>
            <TableCell className="font-sans text-sm text-center">
              {index + 1}
            </TableCell>
            <TableCell className="flex items-center justify-center gap-2">
              <div className="relative w-10 h-10">
                <Image src={product?.product?.image} alt="imgProduct" fill />
              </div>
              <span className="font-sans text-sm">
                {product?.product?.name}
              </span>
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              ${product?.product?.discount ?? product?.product?.priceOrigin}
            </TableCell>
            <TableCell className="flex justify-center">
              <div className="relative">
                <Input
                  className="w-20"
                  value={quantities[index]}
                  onChange={(e) => {
                    handleQuantityChange(
                      index,
                      Number(e.target.value),
                      product?.id
                    );
                  }}
                />
                <div className="absolute top-1 right-2">
                  <ChevronUp
                    size={16}
                    className="hover:cursor-pointer hover:opacity-70"
                    onClick={() =>
                      handleQuantityChange(
                        index,
                        Math.min(
                          product?.product?.countInStock,
                          quantities[index] + 1
                        ),
                        product?.id
                      )
                    }
                  />
                  <ChevronDown
                    size={16}
                    className="hover:cursor-pointer hover:opacity-70"
                    onClick={() =>
                      handleQuantityChange(
                        index,
                        Math.max(1, quantities[index] - 1),
                        product?.id
                      )
                    }
                  />
                </div>
              </div>
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              $
              {(
                (product?.product?.discount ?? product?.product?.priceOrigin) *
                quantities[index]
              ).toFixed(2)}
            </TableCell>
            <TableCell className="text-center">
              <AlertDeleteCart idCartITem={product?.id} />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={5} className="font-sans text-sm text-right">
            Total:
          </TableCell>
          <TableCell className="font-sans text-sm text-center">
            ${subTotal?.toFixed(2)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCart;
