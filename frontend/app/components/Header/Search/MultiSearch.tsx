import { MultiSelect } from "@mantine/core";

import { IconStethoscope, IconPrison, IconMapPin } from "@tabler/icons-react";

import UseResponsive from "../../UseResponsive";

const SPECIALITIES = ["Cardiology", "Dentistry", "Neurology", "Pediatrics"];
const CITIES = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"];
const THANAS = ["Sabujbagh", "Khilgoan"];

interface MultiProps {
  expended?: boolean;
  size: string;
  placeholder: string;
  icon: React.ReactNode;
  data: string[];
}

const MultiSearch: React.FC<MultiProps> = ({
  expended,
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

  const getExtendedInputSize = () => {
    if (isSm) return 100;
    if (isMd) return 120;
    if (isLg) return 100;
    if (isXl) return 100;
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
        width: isXs ? "100%" : expended ? 200 : getInputSize(),
      }}
    />
  );
};

interface MultiSelectProps {
  expanded?: boolean;
}

export const SpecialitySearch: React.FC<MultiSelectProps> = ({ expanded }) => {
  return (
    <MultiSearch
      expended={expanded}
      size={expanded ? "md" : "xs"}
      placeholder="Speciality"
      icon={<IconStethoscope size={expanded ? 25 : 14} color="#FF385C" />}
      data={SPECIALITIES}
    />
  );
};

export const CitySearch: React.FC<MultiSelectProps> = ({ expanded }) => {
  return (
    <MultiSearch
      expended={expanded}
      size={expanded ? "md" : "xs"}
      placeholder="City"
      icon={<IconMapPin size={expanded ? 25 : 14} color="#FF385C" />}
      data={CITIES}
    />
  );
};

export const ThanaSearch: React.FC<MultiSelectProps> = ({ expanded }) => {
  return (
    <MultiSearch
      expended={expanded}
      size={expanded ? "md" : "xs"}
      placeholder="Thana"
      icon={<IconPrison size={expanded ? 25 : 14} color="#FF385C" />}
      data={THANAS}
    />
  );
};
