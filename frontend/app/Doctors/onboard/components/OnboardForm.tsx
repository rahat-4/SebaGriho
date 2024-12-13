"use client";

import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Paper,
  Title,
  Button,
  Group,
  Stack,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// Types to match the JSON structure
interface User {
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
}

interface Department {
  name: string;
  description: string;
}

interface Degree {
  name: string;
  institute: string;
  result: string;
  passing_year: string;
}

interface Achievement {
  name: string;
  source: string;
  year: string;
}

interface Specialty {
  name: string;
  department: Department;
}

interface Affiliation {
  title: string;
  hospital_name: string;
}

interface LanguageSpoken {
  language: string;
}

interface DoctorProfileFormProps {
  initialData?: {
    user: User;
    about: string;
    experience: number;
    appointment_fee: number;
    consultation_fee: number;
    follow_up_fee: number;
    check_up_fee: number;
    department: Department;
    degree: Degree[];
    achievement: Achievement[];
    specialty: Specialty[];
    affiliation: Affiliation[];
    language_spoken: LanguageSpoken[];
  };
}

const OnboardForm: React.FC<DoctorProfileFormProps> = ({ initialData }) => {
  const [degrees, setDegrees] = useState<Degree[]>(initialData?.degree || []);
  const [achievements, setAchievements] = useState<Achievement[]>(
    initialData?.achievement || []
  );
  const [specialties, setSpecialties] = useState<Specialty[]>(
    initialData?.specialty || []
  );
  const [affiliations, setAffiliations] = useState<Affiliation[]>(
    initialData?.affiliation || []
  );
  const [languagesSpoken, setLanguagesSpoken] = useState<LanguageSpoken[]>(
    initialData?.language_spoken || []
  );

  const form = useForm({
    initialValues: {
      email: initialData?.user?.email || "",
      phone: initialData?.user?.phone || "",
      first_name: initialData?.user?.first_name || "",
      last_name: initialData?.user?.last_name || "",
      about: initialData?.about || "",
      experience: initialData?.experience || 0,
      appointment_fee: initialData?.appointment_fee || 0,
      consultation_fee: initialData?.consultation_fee || 0,
      follow_up_fee: initialData?.follow_up_fee || 0,
      check_up_fee: initialData?.check_up_fee || 0,
      department_name: initialData?.department?.name || "",
      department_description: initialData?.department?.description || "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^\+?\d{10,14}$/.test(value) ? null : "Invalid phone number",
      first_name: (value) => (value.length < 2 ? "Name is too short" : null),
      last_name: (value) => (value.length < 2 ? "Name is too short" : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const doctorProfile = {
      ...values,
      degrees,
      achievements,
      specialties,
      affiliations,
      languages_spoken: languagesSpoken,
    };
    console.log("Submitted Doctor Profile:", doctorProfile);
    // Add your submission logic here
  };

  const addDegree = () => {
    setDegrees([
      ...degrees,
      {
        name: "",
        institute: "",
        result: "",
        passing_year: "",
      },
    ]);
  };

  const addAchievement = () => {
    setAchievements([
      ...achievements,
      {
        name: "",
        source: "",
        year: "",
      },
    ]);
  };

  const addSpecialty = () => {
    setSpecialties([
      ...specialties,
      {
        name: "",
        department: { name: "", description: "" },
      },
    ]);
  };

  const addAffiliation = () => {
    setAffiliations([
      ...affiliations,
      {
        title: "",
        hospital_name: "",
      },
    ]);
  };

  const addLanguage = () => {
    setLanguagesSpoken([...languagesSpoken, { language: "" }]);
  };

  return (
    <Paper
      shadow="md"
      radius="md"
      p="xl"
      withBorder
      className="max-w-4xl mx-auto mt-10"
    >
      <Title order={2} className="text-center mb-6">
        Doctor Profile Form
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {/* Personal Information */}
          <Group grow>
            <TextInput
              label="First Name"
              placeholder="Enter first name"
              {...form.getInputProps("first_name")}
              required
            />
            <TextInput
              label="Last Name"
              placeholder="Enter last name"
              {...form.getInputProps("last_name")}
              required
            />
          </Group>

          <Group grow>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
              required
            />
            <TextInput
              label="Phone Number"
              placeholder="+8801XXXXXXXXX"
              {...form.getInputProps("phone")}
              required
            />
          </Group>

          <TextInput
            label="About"
            placeholder="Brief description about yourself"
            {...form.getInputProps("about")}
          />

          {/* Professional Details */}
          <Group grow>
            <NumberInput
              label="Years of Experience"
              placeholder="Total years of experience"
              {...form.getInputProps("experience")}
            />
            <TextInput
              label="Department"
              placeholder="Your primary department"
              {...form.getInputProps("department_name")}
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Appointment Fee"
              placeholder="Fee for appointments"
              {...form.getInputProps("appointment_fee")}
            />
            <NumberInput
              label="Consultation Fee"
              placeholder="Fee for consultations"
              {...form.getInputProps("consultation_fee")}
            />
          </Group>

          {/* Degrees Section */}
          <Divider label="Degrees" labelPosition="center" />
          {degrees.map((degree, index) => (
            <Group key={index} grow>
              <TextInput
                label="Degree Name"
                placeholder="e.g., Doctor of Medicine"
                value={degree.name}
                onChange={(e) => {
                  const newDegrees = [...degrees];
                  newDegrees[index].name = e.currentTarget.value;
                  setDegrees(newDegrees);
                }}
              />
              <TextInput
                label="Institute"
                placeholder="Institution name"
                value={degree.institute}
                onChange={(e) => {
                  const newDegrees = [...degrees];
                  newDegrees[index].institute = e.currentTarget.value;
                  setDegrees(newDegrees);
                }}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addDegree}>
            Add Degree
          </Button>

          {/* Similar sections for Achievements, Specialties, Affiliations, and Languages */}

          <Group mt="xl">
            <Button type="submit" color="blue">
              Save Doctor Profile
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
};

export default OnboardForm;
