import OnboardForm from "./components/OnboardForm";

const initialDoctorData = {
  user: {
    email: "nahid@example.com",
    phone: "+8801776199864",
    first_name: "Nahid",
    last_name: "Hasan",
  },
  about: "Experienced physician specializing in internal medicine.",
  experience: 4,
  appointment_fee: 300,
  consultation_fee: 300,
  follow_up_fee: 100,
  check_up_fee: 100,
  department: {
    name: "Cardiology",
    description: "Specializes in heart-related issues.",
  },
  degree: [
    {
      name: "Doctor of Medicine",
      institute: "Medical College",
      result: "Distinction",
      passing_year: "2010-08-08",
    },
    {
      name: "Master of Science",
      institute: "University of Health Sciences",
      result: "First Class",
      passing_year: "2015-08-08",
    },
  ],
  achievement: [
    {
      name: "Outstanding Doctor Award",
      source: "Medical Association",
      year: "2018-08-08",
    },
    {
      name: "Research Paper Award",
      source: "International Medical Conference",
      year: "2019-08-08",
    },
  ],
  specialty: [
    {
      name: "Cardiac Electrophysiology",
      department: {
        name: "Cardiology",
        description: "Specializes in heart-related issues.",
      },
    },
    {
      name: "Interventional Cardiology",
      department: {
        name: "Cardiology",
        description: "Specializes in heart-related issues.",
      },
    },
  ],
  affiliation: [
    {
      title: "Consultant Cardiologist",
      hospital_name: "City Hospital",
    },
    {
      title: "Visiting Specialist",
      hospital_name: "General Hospital",
    },
  ],
  language_spoken: [{ language: "English" }, { language: "Bangla" }],
};

const Index = () => {
  return <OnboardForm />;
};

export default Index;
