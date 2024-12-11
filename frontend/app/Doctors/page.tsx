import DoctorCardComponent from "./components/DoctorCardComponent";

import DoctorData from "../Data/doctors";

const Index = () => {
  return (
    <>
      {DoctorData.map((doctor, index) => (
        <DoctorCardComponent {...doctor} key={index} />
      ))}
    </>
  );
};

export default Index;
