import { useQuery } from '@tanstack/react-query'


const useAllInstructorsCard = () => {
    const { isLoading, data:instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/instructors')
            return res.json();
        }
      })
   return [instructors,isLoading]
};

export default useAllInstructorsCard;