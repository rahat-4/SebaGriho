"use client";

import React from "react";
import {
  Button,
  Group,
  Menu,
  MenuItem,
  MenuDropdown,
  MenuTarget,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";

import UseResponsive from "../UseResponsive";

const User: React.FC<{ getSize: () => number }> = ({ getSize }) => {
  const theme = useMantineTheme();
  const { isXs, isSm, isMd, isLg } = UseResponsive();

  return (
    <Menu
      position="bottom-end"
      trigger="hover"
      offset={5}
      transitionProps={{ duration: 300, transition: "pop" }}
      radius="md"
    >
      <MenuTarget>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <IconUserFilled color={theme.colors.red[6]} size={getSize()} />
        </div>
      </MenuTarget>
      <MenuDropdown>
        <MenuItem>Register</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuDropdown>
    </Menu>
  );
};

export default User;
