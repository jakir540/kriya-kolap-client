import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';


const useAllInstructorsCard = () => {
    const {user,loading} = useAuth()
    const { isLoading, data:instructors = [] } = useQuery({
        queryKey: ['instructors'],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/instructors')
            console.log(res)
            return res.json();
        }
      })
   return [instructors,isLoading]
};

export default useAllInstructorsCard;