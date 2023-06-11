import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";

const MySelectedClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: mySelectClasses = [], refetch } = useQuery(
      ["mySelectClasses"],
      async () => {
        const res = await axiosSecure.get("/mySelectClasses");
        return res.data;
      }
    );
    console.log(mySelectClasses);

    return (
        <div>
            <h2 className="text-center my-8 text-3xl font-semibold">My Selected Class  {mySelectClasses.length}</h2>
        </div>
    );
};

export default MySelectedClass;