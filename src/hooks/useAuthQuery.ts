
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "sonner";
import Cookies from "js-cookie";

const loginUser = async (data: TLogin) => {
  const res = await axios.post(`http:localhost:3000/auth/login`, {
    email: data.email,
    password: data.password,
  });
  return res.data;
};

export const useLoginUserQuery = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      toast.success("Logged in successfully", {
        position: "top-center",
      });
      Cookies.set("token", data.data.access_token);
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    },
  });
};
