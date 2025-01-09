import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaUserCircle, FaUserFriends } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { RiNotification2Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { Avatar, IconButton } from "@material-tailwind/react";
import { MdMessage } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { Link, useNavigate } from "react-router";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { userLoginInfo } from "../slices/UserSlice";

const Sidebar = () => {
  const auth = getAuth();
  const dispatch = useDispatch()
  const userdata = useSelector((state) => state.userInfo.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userdata) {
      navigate("/login");
    }
  });

  const [popup, setPopup] = useState(false);

  const handleLogoutPopup = () => {
    setPopup(!popup);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {

      console.log("Sign-out successful")
      localStorage.removeItem("UserInfo")
      dispatch(userLoginInfo(""))
      navigate("/login")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  };

  return (
    <>
      <Card
        className={`${
          popup && "static"
        } w-full max-w-[16rem] bg-gra p-4 shadow-xl rounded-none shadow-blue-gray-900/5`}
      >
        {popup && (
          <div className="p-3 absolute left-2/4 translate-x-[-50%] z-50 rounded bg-gray-300">
            <IconButton
              onClick={handleSignOut}
              className={`bg-green-500 font-semibold px-7`}
            >
              Yes
            </IconButton>
            <IconButton
              onClick={() => setPopup(false)}
              className={`bg-red-500 font-semibold px-7 ml-1`}
            >
              No
            </IconButton>
          </div>
        )}
        <div className="mb-2 p-4">
          <Avatar src={userdata?.photoURL} alt="avatar" size="xxl" />

          <h1 className="text-xl font-bold">{userdata.displayName}</h1>
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
          <Link>
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
          <ListItem onClick={handleLogoutPopup}>
            <ListItemPrefix>
              <RiLogoutBoxRLine className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
};

export default Sidebar;
