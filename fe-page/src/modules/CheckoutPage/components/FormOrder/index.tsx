import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { billSchema } from "../../types/billSchema";
import { useRouter } from "next/navigation";
import axios from "../../../../util/axios.customize";
import { CartContext } from "@/context/cartContext";

import BillingDetails from "../BillingDetails";
import PriceTotal from "../PriceTotal";

import { API_URL } from "@/types/common";
import ROUTES from "@/types/routes";
import { useGetUser } from "@/hooks/useGetUser";

type formOrder = {
  name: string;
  address: string;
  phone: string;
};

const FormOrder = () => {
  const cartContext = React.useContext(CartContext);
  const methodOrder = cartContext.methodOrder;
  const subTotal = cartContext?.subTotal;
  const dataCart = cartContext.dataCart;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(billSchema),
  });

  const router = useRouter();

  const { user } = useGetUser();

  const handleCheckoutCashe = async (data: formOrder) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/orders/${dataCart?.id}`,
        {
          phone: data?.phone,
          name: data?.name,
          address: data?.address,
          totalPrice: subTotal,
          user: user?._id,
        }
      );

      if (response) {
        toast.success("Order product successfully");
        router.replace(ROUTES.HOME);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckoutBank = (data: formOrder) => {
    console.log(data);
    console.log("bank");
  };

  const handleCheckout = async (data: formOrder) => {
    switch (methodOrder) {
      case "cash":
        handleCheckoutCashe(data);
        break;
      case "bank":
        handleCheckoutBank(data);
        break;

      default:
        break;
    }
  };
  return (
    <form
      className="grid grid-cols-2 gap-44"
      onSubmit={handleSubmit(handleCheckout)}
    >
      <BillingDetails register={register} errors={errors} />
      <PriceTotal />
    </form>
  );
};

export default FormOrder;
