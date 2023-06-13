import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';


const useAllInstructorsCard = () => {
    const {user,loading} = useAuth()
    const { isLoading, data:instructors = [] } = useQuery({
        queryKey: ['instructors'],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await fetch('https://kriya-kolap-sever-jakir540.vercel.app/instructors')
            console.log(res)
            return res.json();
        }
      })
   return [instructors,isLoading]
};

export default useAllInstructorsCard;