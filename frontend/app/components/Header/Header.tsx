"use client";

import { useMemo } from "react";

import { Group, Image, Divider, Button, ButtonGroup } from "@mantine/core";
import {
  IconSortDescending,
  IconAdjustmentsAlt,
  IconLocation,
} from "@tabler/icons-react";

import SearchComponent from "./Search/SearchComponent";

import User from "./User";
import UseResponsive from "../UseResponsive";

const HeaderMenu = () => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  const logoSize = useMemo(() => {
    if (isXs) return 17;
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
      <Group justify="space-between" px={5}>
        <Button
          variant="default"
          size="compact-xs"
          rightSection={<IconLocation size={12} />}
          style={{ fontSize: 10 }}
        >
          Location
        </Button>
        <ButtonGroup>
          <Button
            variant="default"
            size="compact-xs"
            rightSection={<IconAdjustmentsAlt size={12} />}
            style={{ fontSize: 10 }}
          >
            Filter
          </Button>
          <Button
            variant="default"
            size="compact-xs"
            rightSection={<IconSortDescending size={12} />}
            style={{ fontSize: 10 }}
          >
            Sort by
          </Button>
        </ButtonGroup>
      </Group>

      <Divider mt={5} />
    </div>
  );
};

export default HeaderMenu;
