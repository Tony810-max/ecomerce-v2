"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderContext } from "@/context/orderContext";
import { Skeleton } from "@/components/ui/skeleton";
import ViewClient from "./ViewCLient";
import ViewProduct from "./ViewProduct";
import CancellOrder from "./CancellOrder";
import ViewShipping from "./ViewShipping";

const StatusOrder = () => {
  const orderContext = React.useContext(OrderContext);
  const { isLoading, dataOrder } = orderContext;
  return (
    <div className="max-h-96 overflow-auto">
      <Table>
        <TableCaption>A list of your orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] font-sans text-sm text-center font-bold">
              #
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Status
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Total Price
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Infomation Client
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Infomation Product Order
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Infomation Shipping
            </TableHead>
            <TableHead className="font-sans text-sm text-center font-bold">
              Cancell Order
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="max-h-10">
          {isLoading
            ? Array.from({ length: 5 }, (data, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-[50px] h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-full h-5 text-center" />
                  </TableCell>
                </TableRow>
              ))
            : dataOrder?.map((order, index) => (
                <TableRow key={order?.id}>
                  <TableCell className="font-sans text-sm text-center">
                    {index + 1}
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center">
                    {order?.status}
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center text-red-600">
                    {order?.totalPrice}
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center">
                    <ViewClient user={order?.user} />
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center">
                    <ViewProduct product={order?.cartItems} />
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center">
                    <ViewShipping
                      address={order?.shippingAddress}
                      phone={order?.phone}
                      name={order?.name}
                    />
                  </TableCell>
                  <TableCell className="font-sans text-sm text-center">
                    <CancellOrder idOrder={order?.id} />
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StatusOrder;
