import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "Home",
  },
  {
    label: <Link to="/Jobchosing">직업 선택</Link>,
    key: "Jobchosing",
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "login",
  },
];

const MenuBar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuBar;
