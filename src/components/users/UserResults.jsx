import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function UserResults() {
  const { isLoading, users, fetchUsers } = useContext(GithubContext);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 x1:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
