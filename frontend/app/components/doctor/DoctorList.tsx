import { Paper } from "@mantine/core";

import DoctorCardList from "./DoctorListCard";

import DoctorData from "./DoctorData";

const DoctorList = () => {
  return (
    <>
      {DoctorData.map((doctor, index) => (
        <DoctorCardList {...doctor} key={index} />
      ))}
    </>
  );
};

export default DoctorList;
