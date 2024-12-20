const DoctorData = [
  {
    name: "Dr. Marzan Sultana",
    degrees: "MBBS, FCPS (Medicine)",
    speciality: "Consultant Cardiologist",
    availability: "10:00 AM - 11:00 AM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
    workingLocation: "Dhaka Medical College Hospital",
  },
  {
    name: "Dr. Rafiq Ahmed",
    degrees: "MBBS, MD (Pediatrics)",
    speciality: "Pediatrician",
    availability: "2:00 PM - 4:00 PM",
    appointmentFee: 600,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    rating: 4.8,
    workingLocation: "Square Hospital, Dhaka",
  },
  {
    name: "Dr. Nasima Akter",
    degrees: "MBBS, MS (Gynecology)",
    speciality: "Gynecologist",
    availability: "12:00 PM - 2:00 PM",
    appointmentFee: 700,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    rating: 4.7,
    workingLocation: "United Hospital, Dhaka",
  },
  {
    name: "Dr. Mohammad Sajid",
    degrees: "MBBS, MD (Neurology)",
    speciality: "Neurologist",
    availability: "3:00 PM - 5:00 PM",
    appointmentFee: 800,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    rating: 4.6,
    workingLocation: "Evercare Hospital, Dhaka",
  },
  {
    name: "Dr. Ayesha Khan",
    degrees: "MBBS, FCPS (Dermatology)",
    speciality: "Dermatologist",
    availability: "11:00 AM - 1:00 PM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    rating: 4.9,
    workingLocation: "Apollo Hospital, Dhaka",
  },
  {
    name: "Dr. Kabir Hossain",
    degrees: "MBBS, MD (Psychiatry)",
    speciality: "Psychiatrist",
    availability: "5:00 PM - 6:00 PM",
    appointmentFee: 400,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    rating: 4.4,
    workingLocation: "Bangabandhu Sheikh Mujib Medical University",
  },
  {
    name: "Dr. Shakil Khan",
    degrees: "MBBS, MS (Orthopedics)",
    speciality: "Orthopedic Surgeon",
    availability: "9:00 AM - 10:00 AM",
    appointmentFee: 1000,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    rating: 4.6,
    workingLocation: "Labaid Hospital, Dhaka",
  },
  {
    name: "Dr. Tasnim Jahan",
    degrees: "MBBS, FCPS (Ophthalmology)",
    speciality: "Ophthalmologist",
    availability: "4:00 PM - 6:00 PM",
    appointmentFee: 750,
    imageUrl: "https://i.pravatar.cc/150?img=7",
    rating: 4.8,
    workingLocation: "Ispahani Eye Hospital, Dhaka",
  },
  {
    name: "Dr. Mahmud Hassan",
    degrees: "MBBS, MD (Oncology)",
    speciality: "Oncologist",
    availability: "2:00 PM - 3:00 PM",
    appointmentFee: 1500,
    imageUrl: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
    workingLocation: "National Institute of Cancer Research",
  },
  {
    name: "Dr. Farhana Rahman",
    degrees: "MBBS, DGO",
    speciality: "Obstetrician",
    availability: "6:00 PM - 7:00 PM",
    appointmentFee: 550,
    imageUrl: "https://i.pravatar.cc/150?img=10",
    rating: 4.7,
    workingLocation: "Popular Diagnostic Center, Dhaka",
  },
  {
    name: "Dr. Marzan Sultana",
    degrees: "MBBS, FCPS (Medicine)",
    speciality: "Consultant Cardiologist",
    availability: "10:00 AM - 11:00 AM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
    workingLocation: "Dhaka Medical College Hospital",
  },
  {
    name: "Dr. Rafiq Ahmed",
    degrees: "MBBS, MD (Pediatrics)",
    speciality: "Pediatrician",
    availability: "2:00 PM - 4:00 PM",
    appointmentFee: 600,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    rating: 4.8,
    workingLocation: "Square Hospital, Dhaka",
  },
  {
    name: "Dr. Nasima Akter",
    degrees: "MBBS, MS (Gynecology)",
    speciality: "Gynecologist",
    availability: "12:00 PM - 2:00 PM",
    appointmentFee: 700,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    rating: 4.7,
    workingLocation: "United Hospital, Dhaka",
  },
  {
    name: "Dr. Mohammad Sajid",
    degrees: "MBBS, MD (Neurology)",
    speciality: "Neurologist",
    availability: "3:00 PM - 5:00 PM",
    appointmentFee: 800,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    rating: 4.6,
    workingLocation: "Evercare Hospital, Dhaka",
  },
  {
    name: "Dr. Ayesha Khan",
    degrees: "MBBS, FCPS (Dermatology)",
    speciality: "Dermatologist",
    availability: "11:00 AM - 1:00 PM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    rating: 4.9,
    workingLocation: "Apollo Hospital, Dhaka",
  },
  {
    name: "Dr. Kabir Hossain",
    degrees: "MBBS, MD (Psychiatry)",
    speciality: "Psychiatrist",
    availability: "5:00 PM - 6:00 PM",
    appointmentFee: 400,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    rating: 4.4,
    workingLocation: "Bangabandhu Sheikh Mujib Medical University",
  },
  {
    name: "Dr. Shakil Khan",
    degrees: "MBBS, MS (Orthopedics)",
    speciality: "Orthopedic Surgeon",
    availability: "9:00 AM - 10:00 AM",
    appointmentFee: 1000,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    rating: 4.6,
    workingLocation: "Labaid Hospital, Dhaka",
  },
  {
    name: "Dr. Tasnim Jahan",
    degrees: "MBBS, FCPS (Ophthalmology)",
    speciality: "Ophthalmologist",
    availability: "4:00 PM - 6:00 PM",
    appointmentFee: 750,
    imageUrl: "https://i.pravatar.cc/150?img=7",
    rating: 4.8,
    workingLocation: "Ispahani Eye Hospital, Dhaka",
  },
  {
    name: "Dr. Mahmud Hassan",
    degrees: "MBBS, MD (Oncology)",
    speciality: "Oncologist",
    availability: "2:00 PM - 3:00 PM",
    appointmentFee: 1500,
    imageUrl: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
    workingLocation: "National Institute of Cancer Research",
  },
  {
    name: "Dr. Farhana Rahman",
    degrees: "MBBS, DGO",
    speciality: "Obstetrician",
    availability: "6:00 PM - 7:00 PM",
    appointmentFee: 550,
    imageUrl: "https://i.pravatar.cc/150?img=10",
    rating: 4.7,
    workingLocation: "Popular Diagnostic Center, Dhaka",
  },
  {
    name: "Dr. Marzan Sultana",
    degrees: "MBBS, FCPS (Medicine)",
    speciality: "Consultant Cardiologist",
    availability: "10:00 AM - 11:00 AM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
    workingLocation: "Dhaka Medical College Hospital",
  },
  {
    name: "Dr. Rafiq Ahmed",
    degrees: "MBBS, MD (Pediatrics)",
    speciality: "Pediatrician",
    availability: "2:00 PM - 4:00 PM",
    appointmentFee: 600,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    rating: 4.8,
    workingLocation: "Square Hospital, Dhaka",
  },
  {
    name: "Dr. Nasima Akter",
    degrees: "MBBS, MS (Gynecology)",
    speciality: "Gynecologist",
    availability: "12:00 PM - 2:00 PM",
    appointmentFee: 700,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    rating: 4.7,
    workingLocation: "United Hospital, Dhaka",
  },
  {
    name: "Dr. Mohammad Sajid",
    degrees: "MBBS, MD (Neurology)",
    speciality: "Neurologist",
    availability: "3:00 PM - 5:00 PM",
    appointmentFee: 800,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    rating: 4.6,
    workingLocation: "Evercare Hospital, Dhaka",
  },
  {
    name: "Dr. Ayesha Khan",
    degrees: "MBBS, FCPS (Dermatology)",
    speciality: "Dermatologist",
    availability: "11:00 AM - 1:00 PM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    rating: 4.9,
    workingLocation: "Apollo Hospital, Dhaka",
  },
  {
    name: "Dr. Kabir Hossain",
    degrees: "MBBS, MD (Psychiatry)",
    speciality: "Psychiatrist",
    availability: "5:00 PM - 6:00 PM",
    appointmentFee: 400,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    rating: 4.4,
    workingLocation: "Bangabandhu Sheikh Mujib Medical University",
  },
  {
    name: "Dr. Shakil Khan",
    degrees: "MBBS, MS (Orthopedics)",
    speciality: "Orthopedic Surgeon",
    availability: "9:00 AM - 10:00 AM",
    appointmentFee: 1000,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    rating: 4.6,
    workingLocation: "Labaid Hospital, Dhaka",
  },
  {
    name: "Dr. Tasnim Jahan",
    degrees: "MBBS, FCPS (Ophthalmology)",
    speciality: "Ophthalmologist",
    availability: "4:00 PM - 6:00 PM",
    appointmentFee: 750,
    imageUrl: "https://i.pravatar.cc/150?img=7",
    rating: 4.8,
    workingLocation: "Ispahani Eye Hospital, Dhaka",
  },
  {
    name: "Dr. Mahmud Hassan",
    degrees: "MBBS, MD (Oncology)",
    speciality: "Oncologist",
    availability: "2:00 PM - 3:00 PM",
    appointmentFee: 1500,
    imageUrl: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
    workingLocation: "National Institute of Cancer Research",
  },
  {
    name: "Dr. Farhana Rahman",
    degrees: "MBBS, DGO",
    speciality: "Obstetrician",
    availability: "6:00 PM - 7:00 PM",
    appointmentFee: 550,
    imageUrl: "https://i.pravatar.cc/150?img=10",
    rating: 4.7,
    workingLocation: "Popular Diagnostic Center, Dhaka",
  },
  {
    name: "Dr. Marzan Sultana",
    degrees: "MBBS, FCPS (Medicine)",
    speciality: "Consultant Cardiologist",
    availability: "10:00 AM - 11:00 AM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=8",
    rating: 4.5,
    workingLocation: "Dhaka Medical College Hospital",
  },
  {
    name: "Dr. Rafiq Ahmed",
    degrees: "MBBS, MD (Pediatrics)",
    speciality: "Pediatrician",
    availability: "2:00 PM - 4:00 PM",
    appointmentFee: 600,
    imageUrl: "https://i.pravatar.cc/150?img=1",
    rating: 4.8,
    workingLocation: "Square Hospital, Dhaka",
  },
  {
    name: "Dr. Nasima Akter",
    degrees: "MBBS, MS (Gynecology)",
    speciality: "Gynecologist",
    availability: "12:00 PM - 2:00 PM",
    appointmentFee: 700,
    imageUrl: "https://i.pravatar.cc/150?img=2",
    rating: 4.7,
    workingLocation: "United Hospital, Dhaka",
  },
  {
    name: "Dr. Mohammad Sajid",
    degrees: "MBBS, MD (Neurology)",
    speciality: "Neurologist",
    availability: "3:00 PM - 5:00 PM",
    appointmentFee: 800,
    imageUrl: "https://i.pravatar.cc/150?img=3",
    rating: 4.6,
    workingLocation: "Evercare Hospital, Dhaka",
  },
  {
    name: "Dr. Ayesha Khan",
    degrees: "MBBS, FCPS (Dermatology)",
    speciality: "Dermatologist",
    availability: "11:00 AM - 1:00 PM",
    appointmentFee: 500,
    imageUrl: "https://i.pravatar.cc/150?img=4",
    rating: 4.9,
    workingLocation: "Apollo Hospital, Dhaka",
  },
  {
    name: "Dr. Kabir Hossain",
    degrees: "MBBS, MD (Psychiatry)",
    speciality: "Psychiatrist",
    availability: "5:00 PM - 6:00 PM",
    appointmentFee: 400,
    imageUrl: "https://i.pravatar.cc/150?img=5",
    rating: 4.4,
    workingLocation: "Bangabandhu Sheikh Mujib Medical University",
  },
  {
    name: "Dr. Shakil Khan",
    degrees: "MBBS, MS (Orthopedics)",
    speciality: "Orthopedic Surgeon",
    availability: "9:00 AM - 10:00 AM",
    appointmentFee: 1000,
    imageUrl: "https://i.pravatar.cc/150?img=6",
    rating: 4.6,
    workingLocation: "Labaid Hospital, Dhaka",
  },
  {
    name: "Dr. Tasnim Jahan",
    degrees: "MBBS, FCPS (Ophthalmology)",
    speciality: "Ophthalmologist",
    availability: "4:00 PM - 6:00 PM",
    appointmentFee: 750,
    imageUrl: "https://i.pravatar.cc/150?img=7",
    rating: 4.8,
    workingLocation: "Ispahani Eye Hospital, Dhaka",
  },
  {
    name: "Dr. Mahmud Hassan",
    degrees: "MBBS, MD (Oncology)",
    speciality: "Oncologist",
    availability: "2:00 PM - 3:00 PM",
    appointmentFee: 1500,
    imageUrl: "https://i.pravatar.cc/150?img=9",
    rating: 4.5,
    workingLocation: "National Institute of Cancer Research",
  },
  {
    name: "Dr. Farhana Rahman",
    degrees: "MBBS, DGO",
    speciality: "Obstetrician",
    availability: "6:00 PM - 7:00 PM",
    appointmentFee: 550,
    imageUrl: "https://i.pravatar.cc/150?img=10",
    rating: 4.7,
    workingLocation: "Popular Diagnostic Center, Dhaka",
  },
];

export default DoctorData;
