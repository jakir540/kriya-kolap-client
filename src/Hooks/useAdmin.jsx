import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecuir"

const useAdmin =()=>{ 
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data:isAdmin,isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data.admin)
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminLoading]
}
export default useAdmin;