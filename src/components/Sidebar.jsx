import React, { useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { RiNotification2Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { Avatar } from "@material-tailwind/react";
import { MdMessage } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const userdata = useSelector((state) => state.userInfo.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userdata) {
      navigate("/login");
    }
  });

  return (
    <>
      <Card className=" w-full max-w-[16rem] bg-gra p-4 shadow-xl rounded-none shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
          {userdata && (
            <h1 className="text-xl font-bold">{userdata.displayName}</h1>
          )}
        </div>
        <List>
          <Link to="/">
            <ListItem>
              <ListItemPrefix>
                <IoHome className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <MdMessage className="h-5 w-5" />
              {/* <ShoppingBagIcon className="h-5 w-5" /> */}
            </ListItemPrefix>
            Message
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <RiNotification2Fill className="h-5 w-5" />
              {/* <ShoppingBagIcon className="h-5 w-5" /> */}
            </ListItemPrefix>
            Notification
          </ListItem>
          <Link to="/friends">
            <ListItem>
              <ListItemPrefix>
                <FaUserFriends className="h-5 w-5" />
              </ListItemPrefix>
              Friends
            </ListItem>
          </Link>
          <Link to="/group">
            <ListItem>
              <ListItemPrefix>
                <HiUserGroup className="h-5 w-5" />
              </ListItemPrefix>
              Group
            </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <PiUserListFill className="h-5 w-5" />
            </ListItemPrefix>
            User
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FaUserCircle className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <hr className="border-[1px] mt-8 mb-2" />
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <Link to="/login">
            <ListItem>
              <ListItemPrefix>
                <RiLogoutBoxRLine className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </Link>
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
