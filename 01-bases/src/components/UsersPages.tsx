import React from "react";
import UserRow from "./UserRow";

const UsersPages = () => {
  return (
    <>
      <h3>Usuarios: </h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <UserRow />
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 rounded-xl text-white">
          {" "}
          &larr; Prev
        </button>
        <button className="p-2 bg-blue-500 rounded-xl text-white">
          Next &rarr;
        </button>
      </div>
    </>
  );
};

export default UsersPages;
