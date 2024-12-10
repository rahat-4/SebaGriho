"use client";

import { useState } from "react";
import {
  Box,
  Flex,
  Paper,
  Stack,
  Text,
  Grid,
  GridCol,
  Avatar,
  Badge,
  Divider,
  Tabs,
  Tooltip,
  Group,
  Image,
  UnstyledButton,
  SegmentedControl,
} from "@mantine/core";
import {
  IconCurrencyTaka,
  IconInfoCircle,
  IconCrown,
  IconStethoscope,
  IconCalendar,
  IconCertificate,
  IconStar,
} from "@tabler/icons-react";

import Address from "./ChamberAddress/Address";
import DoctorProfileTabs from "./DoctorProfileTabs";

import DocOne from "@/public/doc_one.jpg";

const DoctorProfile = () => {
  const doctorDetails = {
    name: "Dr. Marzan Sultana",
    id: "101",
    specialization: "Cardiology",
    qualifications: "MBBS, FCPS",
    workplace: "Mugda Medical College and Hospital",
    experience: "12 years",
    availability: "9:00 AM - 5:00 PM (Monday to Friday)",
    appointmentFee: 500,
    bmdc: 8956,
    rating: 4.2,
  };

  return (
    <Grid justify="flex-start" my="sm" gutter="xs">
      <GridCol span={{ base: 12, sm: 4, lg: 3 }}>
        <Address />
      </GridCol>
      <GridCol span={{ base: 12, sm: 6, lg: 7 }}>
        <Paper shadow="md" radius={"md"} withBorder p="xs" pos="relative">
          {/* Profile Header */}
          <Box pos="relative" mb="xs">
            <Box
              h={200}
              pos="relative"
              style={{
                overflow: "hidden",
                borderTopLeftRadius: "var(--mantine-radius-md)",
                borderTopRightRadius: "var(--mantine-radius-md)",
              }}
            >
              <Image
                h={150}
                src={DocOne.src}
                alt="Cover Photo"
                fit="cover"
                style={{
                  filter: "brightness(0.8)",
                }}
              />
            </Box>
            <Avatar
              pos="absolute"
              bottom={0}
              left={15}
              src={DocOne.src}
              size={90}
              radius="md"
              className="border-4 border-white"
            />
            <Stack gap={0} pos={"absolute"} bottom={10} left={115}>
              <Text fw={700} size="md" c="dark" pos={"relative"}>
                {doctorDetails.name}
              </Text>
              <Badge
                p={0}
                px={2}
                pos={"absolute"}
                top={5}
                right={-50}
                color="blue"
                variant="light"
                leftSection={
                  <Text fz={11} fw={700}>
                    ID:{" "}
                  </Text>
                }
              >
                {doctorDetails.id}
              </Badge>
              <Flex align="center" gap={5}>
                <IconStethoscope size={12} stroke={1.5} />
                <Text size={"xs"}>{doctorDetails.specialization}</Text>
              </Flex>
            </Stack>
          </Box>

          {/* Doctor Details */}
          <Stack gap={0} my={10}>
            <Tooltip label="Qualifications">
              <Flex align="center" gap="xs">
                <IconCertificate size={15} stroke={1.5} />
                <Text size="xs">{doctorDetails.qualifications}</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="Workplace">
              <Flex align="center" gap="xs">
                <IconInfoCircle size={15} stroke={1.5} />
                <Text size="xs">{doctorDetails.workplace}</Text>
              </Flex>
            </Tooltip>
            <Tooltip label="Availability">
              <Flex align="center" gap="xs">
                <IconCalendar size={15} stroke={1.5} />
                <Text size="xs">{doctorDetails.availability}</Text>
              </Flex>
            </Tooltip>
            <Flex p={5} justify={"space-between"}>
              <Flex direction={"column"} justify="center" align="center">
                <Text size="xs" fw={700}>
                  BMDC Number
                </Text>{" "}
                <Text size="xs">{doctorDetails.bmdc}</Text>
              </Flex>
              <Flex direction={"column"} justify="center" align="center">
                <Text size="xs" fw={700}>
                  Experience
                </Text>{" "}
                <Text size="xs">{doctorDetails.experience}</Text>
              </Flex>
              <Flex direction={"column"} justify="center" align="center">
                <Text size="xs" fw={700}>
                  Ratings (232)
                </Text>{" "}
                <Text size="xs">{doctorDetails.rating}</Text>
              </Flex>
            </Flex>
            {/* <UnstyledButton
              mb={5}
              fz={"xs"}
              bg="#FF385C"
              c={"white"}
              px={10}
              py={5}
              style={{
                borderRadius: "var(--mantine-radius-md)",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text size="xs">Book an Appointment</Text>
            </UnstyledButton> */}
            <UnstyledButton
              fz={"xs"}
              fw={700}
              bg="#FF385C"
              c={"white"}
              px={10}
              py={5}
              style={{
                borderRadius: "var(--mantine-radius-md)",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Appointment Fee: <IconCurrencyTaka size={15} /> 500
            </UnstyledButton>
          </Stack>

          <DoctorProfileTabs />
        </Paper>
      </GridCol>
    </Grid>
  );
};

export default DoctorProfile;
