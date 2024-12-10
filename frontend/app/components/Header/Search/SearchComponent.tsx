"use client";

import {
  ActionIcon,
  Button,
  Modal,
  Text,
  Group,
  Grid,
  GridCol,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

import { IconSearch } from "@tabler/icons-react";

import { SpecialitySearch, CitySearch, ThanaSearch } from "./MultiSearch";
import UseResponsive from "../../UseResponsive";

const SearchComponent = () => {
  const { isXs } = UseResponsive();
  const [opened, { open, close }] = useDisclosure(false);

  return isXs ? (
    <>
      <Button
        px={5}
        m={0}
        radius={"xl"}
        size="xs"
        variant="filled"
        color={"#FF385C"}
        onClick={open}
        rightSection={<IconSearch size={15} />}
      >
        Doctor
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title="Search"
        centered={false}
        transitionProps={{
          transition: "slide-down",
          duration: 500,
        }}
        xOffset={0}
        yOffset={0}
      >
        <Grid gutter={8}>
          <GridCol span={12}>
            <SpecialitySearch />
          </GridCol>
          <GridCol span={6}>
            <CitySearch />
          </GridCol>
          <GridCol span={6}>
            <ThanaSearch />
          </GridCol>
          <GridCol span={12}>
            <ActionIcon
              c={"white"}
              variant="filled"
              color="#FF385C"
              size="md"
              radius="md"
              w="100%"
              onClick={close}
            >
              <IconSearch size={20} />
              <Text ml={5}>Search</Text>
            </ActionIcon>
          </GridCol>
        </Grid>
      </Modal>
    </>
  ) : (
    <Group
      px={5}
      justify="center"
      gap={0}
      style={{
        borderRadius: "50px",
        backgroundColor: "white",
        boxShadow: "0px 0px 5px gray",
      }}
      maw={660}
    >
      <SpecialitySearch />
      <CitySearch />
      <ThanaSearch />
      <ActionIcon
        c={"white"}
        variant="filled"
        color="#FF385C"
        size={"sm"}
        radius="xl"
      >
        <IconSearch size={14} />
      </ActionIcon>
    </Group>
  );
};

export default SearchComponent;
