import React from "react";
import Group from "../components/Group";
// import Sidebar from "../components/Sidebar";
import UserList from "../components/UserList";

const Home = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-4">
        <div className="">
          <Group />
          <UserList />
        </div>
        {/* <div className="">
          <UserList />
          <UserList />
        </div>
        <div className="">
          <UserList />
          <UserList />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
