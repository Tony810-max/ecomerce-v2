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

const ListCancellOrder = () => {
  const orderContext = React.useContext(OrderContext);
  const { dataOrder } = orderContext;

  return (
    <Table>
      <TableCaption>A list of your cancell order.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px] font-sans text-sm text-center">
            #
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Status
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Infomation Product Order
          </TableHead>
          <TableHead className="font-sans text-sm text-center">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataOrder?.map((order, index) => (
          <TableRow key={order?.id}>
            <TableCell className="font-sans text-sm text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-sans text-sm text-center text-red-500">
              {order?.status}
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              {"None"}
            </TableCell>
            <TableCell className="font-sans text-sm text-center">
              {"None"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListCancellOrder;
