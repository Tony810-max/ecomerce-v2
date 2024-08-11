import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useError = () => {
  const handleError = (error: unknown) => {
    const errors = error as AxiosError<{ message: string }>;
    const status = errors?.response?.status;
    const errMessage = errors.response?.data?.message;

    if (status === 401 || status === 404 || status === 400) {
      toast.error(errMessage);
    } else {
      console.error(errors);
    }
  };

  return { handleError };
};
