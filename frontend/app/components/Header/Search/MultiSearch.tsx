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
  const { isXs, isSm, isMd, isLg, isXl } = UseResponsive();

  const getInputSize = () => {
    if (isXs || isSm || isMd) {
      return 80;
    }
    if (isLg || isXl) {
      return 100;
    }
  };

  return (
    <MultiSelect
      radius="md"
      variant={isXs ? "filled" : "unstyled"}
      clearable
      searchable
      nothingFoundMessage="No items found"
      withScrollArea={false}
      size={size}
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
  return (
    <MultiSearch
      size={"xs"}
      placeholder="Speciality"
      icon={<IconStethoscope size={14} color="#FF385C" />}
      data={SPECIALITIES}
    />
  );
};

export const CitySearch = () => {
  return (
    <MultiSearch
      size={"xs"}
      placeholder="City"
      icon={<IconMapPin size={14} color="#FF385C" />}
      data={CITIES}
    />
  );
};

export const ThanaSearch = () => {
  return (
    <MultiSearch
      size={"xs"}
      placeholder="Thana"
      icon={<IconPrison size={14} color="#FF385C" />}
      data={THANAS}
    />
  );
};
