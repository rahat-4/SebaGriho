"use client";

import {
  Button,
  Divider,
  Group,
  NumberInput,
  Paper,
  Stack,
  TextInput,
  Title
} from "@mantine/core";
import { useState } from "react";

// Types to match the JSON structure
interface User {
  avatar: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  bmdcNumber: number;
  nid: number;
  gender: string;
  bloodGroup: string;
  dateOfBirth: string;
  about: string;
}

interface Degree {
  name: string;
  institute: string;
  result: string;
  passingYear: string;
  country: string;
}

interface Department {
  name: string;
  description: string;
}

interface Specialty {
  name: string;
  department: Department;
}

interface Affiliation {
  title: string;
  hospitalName: string;
  status: string;
}

interface Achievement {
  name: string;
  source: string;
  year: string;
}

interface LanguageSpoken {
  language: string;
}


interface DoctorProfileFormProps {
  initialData?: {
    user: User;
    degree: Degree[];
    achievement: Achievement[];
    department: Department;
    specialty: Specialty[];
    affiliation: Affiliation[];
    language_spoken: LanguageSpoken[];
    experience: number;
    appointmentFee: number;
    followUpFee: number;
  };
}

const OnboardForm = () => {
  const [degrees, setDegrees] = useState<Degree[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [affiliations, setAffiliations] = useState<Affiliation[]>([]);
  const [languagesSpoken, setLanguagesSpoken] = useState<LanguageSpoken[]>([]);


  const addDegree = () => {
    setDegrees([
      ...degrees,
      {
        name: "",
        institute: "",
        result: "",
        passingYear: "",
        country: "",
      },
    ]);
  };

  const addDepartment = () => {
    setDepartments([
      ...departments,
      {
        name: "",
        description: "",
      },
    ]);
  }

  const addSpecialty = () => {
    setSpecialties([
      ...specialties,
      {
        name: "",
        department: { name: "", description: "" },
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


  const addAffiliation = () => {
    setAffiliations([
      ...affiliations,
      {
        title: "",
        hospitalName: "",
        status: "",
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

      <form>
        <Stack>
          {/* Personal Information */}
          <Group grow>
            <TextInput
              label="First Name"
              placeholder="Enter first name"
              required
            />
                        <TextInput
              label="Middle Name"
              placeholder="Enter Middle name"
              required
            />
            <TextInput
              label="Last Name"
              placeholder="Enter last name"
              required
            />
          </Group>

          <Group grow>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
            />
            <TextInput
              label="Phone Number"
              placeholder="+8801XXXXXXXXX"
              required
            />
          </Group>

          <TextInput
            label="About"
            placeholder="Brief description about yourself"
          />

          {/* Professional Details */}
          <Group grow>
            <NumberInput
              label="Years of Experience"
              placeholder="Total years of experience"
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Appointment Fee"
              placeholder="Fee for appointments"
            />
            <NumberInput
              label="Consultation Fee"
              placeholder="Fee for consultations"
            />
          </Group>

          {/* Degrees Section */}
          <Divider label="Degrees" labelPosition="center" />
          {degrees.map((degree, index) => (
            <Group key={index} grow>
              <TextInput
                label="Degree"
                placeholder="e.g., Doctor of Medicine"
                value={degree.name}
              />
              <TextInput
                label="Institute"
                placeholder="Institution"
                value={degree.institute}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addDegree}>
            Add Degree
          </Button>
            
          {/* Departments Section */}
          <Divider label="Departments" labelPosition="center" />
          {departments.map((department, index) => (
            <Group key={index} grow>
              <TextInput
                label="Department"
                placeholder="e.g., Cardiology"
                value={department.name}
              />
              <TextInput
                label="Description"
                placeholder="Description"
                value={department.description}
              />
            </Group>
          ))}

          <Button variant="outline" onClick={addDepartment}>
            Add Department
          </Button>
            
          {/* Specialties Section */}
          <Divider label="Specialties" labelPosition="center" />
          {specialties.map((specialty, index) => (
            <Group key={index} grow>
              <TextInput
                label="Specialty"
                placeholder="e.g., Cardiologist"
                value={specialty.name}
              />
              <TextInput
                label="Department"
                placeholder="Department name"
                value={specialty.department.name}
              />
              <TextInput
                label="Description"
                placeholder="Description"
                value={specialty.department.description}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addSpecialty}>
            Add Specialty
          </Button>
            
          {/* Achievements Section */}
          <Divider label="Achievements" labelPosition="center" />
          {achievements.map((achievement, index) => (
            <Group key={index} grow>
              <TextInput
                label="Achievement"
                placeholder="e.g., Best Doctor Award"
                value={achievement.name}
              />
              <TextInput
                label="Source"
                placeholder="Source of achievement"
                value={achievement.source}
              />
              <TextInput
                label="Year"
                placeholder="Year of achievement"
                value={achievement.year}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addAchievement}>
            Add Achievement
          </Button>
              
          {/* Affiliations Section */}
          <Divider label="Affiliations" labelPosition="center" />
          {affiliations.map((affiliation, index) => (
            <Group key={index} grow>
              <TextInput
                label="Title"
                placeholder="e.g., Consultant"
                value={affiliation.title}
              />
              <TextInput
                label="Hospital"
                placeholder="Hospital name"
                value={affiliation.hospitalName}
              />
              <TextInput
                label="Status"
                placeholder="e.g., Active"
                value={affiliation.status}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addAffiliation}>
            Add Affiliation
          </Button>
              
          {/* Languages Spoken Section */}
          <Divider label="Languages Spoken" labelPosition="center" />
          {languagesSpoken.map((language, index) => (
            <Group key={index} grow>
              <TextInput
                label="Language"
                placeholder="e.g., English"
                value={language.language}
              />
            </Group>
          ))}
          <Button variant="outline" onClick={addLanguage}>
            Add Language
          </Button>

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
