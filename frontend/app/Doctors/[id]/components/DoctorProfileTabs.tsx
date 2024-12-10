import React, { useState } from "react";
import {
  SegmentedControl,
  Box,
  Text,
  Stack,
  Paper,
  Transition,
} from "@mantine/core";
import {
  IconInfoCircle,
  IconCrown,
  IconStethoscope,
  IconHomeLink,
} from "@tabler/icons-react";

import Address from "./ChamberAddress/Address";

const DoctorProfileTabs = () => {
  const [activeSegment, setActiveSegment] = useState("information");

  const segmentData = [
    {
      value: "address",
      label: "Address",
      icon: <IconHomeLink size={16} stroke={1.5} />,
    },
    {
      value: "information",
      label: "Information",
      icon: <IconInfoCircle size={16} stroke={1.5} />,
    },
    {
      value: "experience",
      label: "Experience",
      icon: <IconCrown size={16} stroke={1.5} />,
    },
    {
      value: "reviews",
      label: "Reviews",
      icon: <IconStethoscope size={16} stroke={1.5} />,
    },
  ];

  const renderContent = () => {
    switch (activeSegment) {
      case "address":
        return (
          <Paper p="md" shadow="xs" radius="md">
            <Address />
          </Paper>
        );
      case "information":
        return (
          <Paper p="md" shadow="xs" radius="md">
            <Stack>
              <Text fw={600}>Professional Information</Text>
              <Text c="dimmed">
                Comprehensive details about the doctor's professional
                background, specializations, and medical expertise.
              </Text>
              <Box>
                <Text>• Specialization: Cardiology</Text>
                <Text>• Board Certifications</Text>
                <Text>• Areas of Expertise</Text>
              </Box>
            </Stack>
          </Paper>
        );
      case "experience":
        return (
          <Paper p="md" shadow="xs" radius="md">
            <Stack>
              <Text fw={600}>Professional Experience</Text>
              <Text c="dimmed">
                Detailed timeline of professional achievements and work history.
              </Text>
              <Box>
                <Text>• Current Hospital: Mugda Medical College</Text>
                <Text>• Years of Practice: 12+ Years</Text>
                <Text>• Previous Affiliations</Text>
              </Box>
            </Stack>
          </Paper>
        );
      case "reviews":
        return (
          <Paper p="md" shadow="xs" radius="md">
            <Stack>
              <Text fw={600}>Patient Reviews</Text>
              <Text c="dimmed">Testimonials and ratings from patients.</Text>
              <Box>
                <Text>• Average Rating: 4.5/5</Text>
                <Text>• Total Reviews: 150+</Text>
                <Text>• Patient Satisfaction: 95%</Text>
              </Box>
            </Stack>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SegmentedControl
        bg={"#EDF2FA"}
        fullWidth
        withItemsBorders={false}
        color="#15AABF"
        radius="md"
        size="xs"
        data={segmentData.map((segment) => ({
          value: segment.value,
          label: (
            <Box style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {segment.icon}
              {segment.label}
            </Box>
          ),
        }))}
        value={activeSegment}
        onChange={setActiveSegment}
        style={{
          marginBottom: "var(--mantine-spacing-md)",
          boxShadow: "var(--mantine-shadow-xs)",
        }}
      />

      <Transition
        mounted={true}
        transition="fade"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>{renderContent()}</div>}
      </Transition>
    </>
  );
};

export default DoctorProfileTabs;
