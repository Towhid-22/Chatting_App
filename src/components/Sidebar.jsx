import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Avatar } from "@material-tailwind/react";
import { RiNotification2Fill, RiLogoutBoxRLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { Link } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            size="xxl"
          />
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <IoHome className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
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
          <Link to="/group">
            <ListItem>
              <ListItemPrefix>
                <HiUserGroup className="h-5 w-5" />
                {/* <ShoppingBagIcon className="h-5 w-5" /> */}
              </ListItemPrefix>
              Group
            </ListItem>
          </Link>

          <ListItem>
            <ListItemPrefix>
              <FaUserCircle className="h-5 w-5" />
              {/* <UserCircleIcon className="h-5 w-5" /> */}
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
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
