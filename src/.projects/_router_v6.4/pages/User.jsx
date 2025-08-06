import React from "react";
import { getAllUser } from "../services/apiUsers";
import Card from "../components/Card";
import { useLoaderData } from "react-router-dom";
const User = () => {
  const user = useLoaderData();

  return (
    <div className="usersWrapper">
      {user?.data?.map((user, index) => (
        <Card user={user} key={index} />
      ))}
    </div >
  );
};
// export const loader = async () => {
//   const users = await getAllUser();
//   return users;
// };
export default User;
