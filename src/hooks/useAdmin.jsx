import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";






const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;