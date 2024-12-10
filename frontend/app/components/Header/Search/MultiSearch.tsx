import { MultiSelect } from "@mantine/core";

import { IconStethoscope, IconPrison, IconMapPin } from "@tabler/icons-react";

import UseResponsive from "../../UseResponsive";

const SPECIALITIES = ["Cardiology", "Dentistry", "Neurology", "Pediatrics"];
const CITIES = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"];
const THANAS = ["Sabujbagh", "Khilgoan"];

interface MultiProps {
  size: string;
  placeholder: string;
  icon: React.ReactNode;
  data: string[];
}

const MultiSearch: React.FC<MultiProps> = ({
  size,
  placeholder,
  icon,
  data,
}) => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  const getInputSize = () => {
    if (isSm) return 90;
    if (isMd) return 120;
    if (isLg) return 150;
    if (isXl) return 180;
  };

  return (
    <MultiSelect
      pl={placeholder === "Speciality" ? 10 : 0}
      radius="md"
      variant={isXs ? "filled" : "unstyled"}
      clearable
      searchable
      nothingFoundMessage="No items found"
      withScrollArea={false}
      size={isAboveXl || isXl ? "sm" : size}
      placeholder={placeholder}
      rightSection={icon}
      data={data}
      style={{
        width: isXs ? "100%" : getInputSize(),
      }}
    />
  );
};

export const SpecialitySearch = () => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  return (
    <MultiSearch
      size={"xs"}
      placeholder="Speciality"
      icon={
        <IconStethoscope size={isAboveXl || isXl ? 20 : 14} color="#FF385C" />
      }
      data={SPECIALITIES}
    />
  );
};

export const CitySearch = () => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  return (
    <MultiSearch
      size={"xs"}
      placeholder="City"
      icon={<IconMapPin size={isAboveXl || isXl ? 20 : 14} color="#FF385C" />}
      data={CITIES}
    />
  );
};

export const ThanaSearch = () => {
  const { isXs, isSm, isMd, isLg, isXl, isAboveXl } = UseResponsive();

  return (
    <MultiSearch
      size={"xs"}
      placeholder="Thana"
      icon={<IconPrison size={isAboveXl || isXl ? 20 : 14} color="#FF385C" />}
      data={THANAS}
    />
  );
};
