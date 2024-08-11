"use client";
import React from "react";
import axios from "../util/axios.customize";
import { API_URL, IOrder } from "@/types/common";
import { useGetUser } from "@/hooks/useGetUser";

interface IOrderContext {
  dataOrder: IOrder[];
  fetchOrderUser: () => void;
  isLoading: boolean;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status: string;
}

export const OrderContext = React.createContext<IOrderContext>({
  dataOrder: [],
  fetchOrderUser: () => {},
  isLoading: true,
  setStatus: () => {},
  status: "Pending",
});

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataOrder, setDataUser] = React.useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [status, setStatus] = React.useState<string>("Pending");
  console.log(status);
  console.log(dataOrder);
  const { user } = useGetUser();

  console.log(`${API_URL}/api/v1/orders/${user?._id}/status?status=${status}`);

  const fetchOrderUser = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/orders/${user?._id}/status?status=${status}`
      );

      if (response) {
        setDataUser(response.data?.order);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchOrderUser();
  }, [status]);

  const context = React.useMemo(() => {
    return {
      dataOrder,
      fetchOrderUser,
      isLoading,
      status,
      setStatus,
    };
  }, [dataOrder, isLoading, status]);

  return (
    <OrderContext.Provider value={context}>{children}</OrderContext.Provider>
  );
};
