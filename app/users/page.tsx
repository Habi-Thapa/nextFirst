import React from "react";

type Props = {};

interface User {
  id: number;
  name: string;
}

const UsersPage = async (props: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: `no-store`,
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
