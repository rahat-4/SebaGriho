"use client";

import { useMemo } from "react";

import { Group, Image, Divider } from "@mantine/core";

import SearchComponent from "./Search/SearchComponent";

import User from "./User";
import UseResponsive from "../UseResponsive";

const HeaderMenu = () => {
  const { isXs, isSm, isXl } = UseResponsive();

  const logoSize = useMemo(() => {
    if (isXs) return 20;
    if (isSm) return 25;
    if (isXl) return 40;
    return 30;
  }, [isXs, isSm, isXl]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        paddingBottom: "15px",
      }}
    >
      <Group justify="space-between" pt={5} px={5}>
        <Image src="/logo.png" alt="logo" height={logoSize} />

        <SearchComponent />

        <User getSize={() => logoSize} />
      </Group>

      <Divider mt={5} />
    </div>
  );
};

export default HeaderMenu;
