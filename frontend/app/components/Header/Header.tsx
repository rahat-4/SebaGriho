"use client";

import { useState, useEffect, useMemo } from "react";

import { Group, Image, Divider } from "@mantine/core";

import SearchComponent from "./Search/SearchComponent";

import User from "./User";
import UseResponsive from "../UseResponsive";

const HeaderMenu = () => {
  const { isXs, isSm, isXl } = UseResponsive();
  const [isExpanded, setIsExpanded] = useState(true);

  const logoSize = useMemo(() => {
    if (isXs) return 20;
    if (isSm) return 25;
    if (isXl) return 40;
    return 30;
  }, [isXs, isSm, isXl]);

  useEffect(() => {
    const handleScroll = () => {
      setIsExpanded(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => setIsExpanded(true);

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

        {(!isExpanded || isXs) && (
          <SearchComponent onSearch={handleSearchClick} expanded={isExpanded} />
        )}

        <User getSize={() => logoSize} />
      </Group>

      {isExpanded && !isXs && (
        <Group justify="center" p={10}>
          <SearchComponent onSearch={handleSearchClick} expanded={isExpanded} />
        </Group>
      )}

      <Divider />
    </div>
  );
};

export default HeaderMenu;
