"use client";

import { useMemo } from "react";

import { Group, Image, Divider } from "@mantine/core";

import SearchComponent from "./Search/SearchComponent";

import User from "./User";
import UseResponsive from "../UseResponsive";

const HeaderMenu = () => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  const logoSize = useMemo(() => {
    if (isXs) return 20;
    if (isSm) return 25;
    if (isMd) return 30;
    if (isLg) return 35;
    if (isXl) return 40;
    return 45;
  }, [isXs, isSm, isMd, isLg, isXl, isAboveXl]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <Group justify="space-between" p={10}>
        <Image src="/logo.png" alt="logo" height={logoSize} />

        <SearchComponent />

        <User getSize={() => logoSize} />
      </Group>

      <Divider mt={5} />
    </div>
  );
};

export default HeaderMenu;
