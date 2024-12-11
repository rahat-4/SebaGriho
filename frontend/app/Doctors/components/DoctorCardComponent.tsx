import React from "react";
import {
  Card,
  Flex,
  Stack,
  Text,
  Image,
  Divider,
  CardSection,
} from "@mantine/core";
import { IconCurrencyTaka, IconStar } from "@tabler/icons-react";

interface DoctorCardProps {
  name: string;
  degrees: string;
  speciality: string;
  availability: string;
  appointmentFee: number;
  imageUrl: string;
  rating: number;
  workingLocation: string;
}

const DoctorCardComponent: React.FC<DoctorCardProps> = ({
  name,
  degrees,
  speciality,
  availability,
  appointmentFee,
  imageUrl,
  rating,
  workingLocation,
}) => {
  return (
    <Card
      withBorder
      maw={350}
      radius="md"
      style={{ boxShadow: "0px 0px 3px gray" }}
    >
      <CardSection>
        <Flex columnGap={5}>
          <Stack gap={3} pos="relative">
            <Image
              src={imageUrl}
              alt="Doctor's Image"
              h={150}
              w="auto"
              fit="contain"
            />
            <Flex
              pos="absolute"
              top={5}
              left={5}
              bg="#EDF2FA"
              style={{ borderRadius: "6px", padding: "0px 2px" }}
              align="center"
              gap={1}
            >
              <IconStar size={12} color="#15AABF" fill="#15AABF" />
              <Text size="xs">{rating}</Text>
            </Flex>
            <Text size="xs" bg="cyan" p={2} pl={3} c="white" fw={500}>
              Appointment Fee: {appointmentFee}
            </Text>
          </Stack>
          <Stack gap={5}>
            <Text size="sm" fw={600}>
              {name}{" "}
              <Text
                component="span"
                fz={10}
                c="white"
                fw={500}
                style={{
                  display: "inline-block",
                  borderRadius: "6px",
                  backgroundColor: "#15AABF",
                  padding: "2px 4px",
                }}
              >
                ID: 101
              </Text>
            </Text>
            <Text size="xs" c="dimmed">
              {degrees}
            </Text>
            <Text size="xs">{speciality}</Text>
            <Text size="xs">
              <Text component="span" c="dimmed" size="xs">
                Working at
              </Text>{" "}
              {workingLocation}
            </Text>
          </Stack>
        </Flex>
      </CardSection>
      <CardSection mt={3} py={6} bg="#EDF2FA" style={{ textAlign: "center" }}>
        <Text size="xs" c="black" fw={500}>
          {availability}
        </Text>
      </CardSection>
    </Card>
  );
};

export default DoctorCardComponent;
