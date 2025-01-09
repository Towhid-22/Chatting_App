import React from "react";
import Sidebar from "./Sidebar";
import { Button, IconButton } from "@material-tailwind/react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

const Group = () => {
  return (
    <>
      <Card className="w-96 mt-5">
        <h2 className="text-xl font-bold text-black ml-5 mt-5">Group List</h2>
        <List>
          <div className="flex items-center">
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Tania Andrew
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <IconButton className="font-semibold">Add</IconButton>
          </div>
        </List>
      </Card>
    </>
  );
};

export default Group;
