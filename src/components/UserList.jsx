import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const data = useSelector((state) => state.userInfo.value);
  console.log(data.uid);
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid != item.key) {
          array.push(item.val());
        }
      });
      setUserList(array);
    });
  }, []);
  const handleFriendRequest = () => {
    console.log("click");
  };
  return (
    <Card className="w-96 mt-5">
      <h2 className="text-xl font-bold text-black ml-5 mt-5">User List</h2>
      <List>
        {userList.map((item) => (
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
                {item.name}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                {item.email}
              </Typography>
            </div>
            <IconButton
              onClick={handleFriendRequest}
              className="font-semibold ml-auto"
            >
              Add
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default UserList;
