import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
console.log(users)
  return (
    <div>
      <h2 className="text-center font-semibold text-3xl">Manage All Users</h2>
      {users.length}

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                users.map((user,index)=><tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>student</td>
                <td>
                    <button className="btn btn-sm btn-success">Make Admin</button>
                </td>
                <td> <button className="btn btn-sm btn-success">Make Instructor</button></td>
              </tr> )
              }
              
             
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
