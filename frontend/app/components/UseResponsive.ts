import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const UseResponsive = () => {
  const theme = useMantineTheme();

  return {
    isXs: useMediaQuery(
      `(min-width: 0) and (max-width: ${theme.breakpoints.xs})`
    ),
    isSm: useMediaQuery(
      `(min-width: calc(${theme.breakpoints.xs} + 1px)) and (max-width: ${theme.breakpoints.sm})`
    ),
    isMd: useMediaQuery(
      `(min-width: calc(${theme.breakpoints.sm} + 1px)) and (max-width: ${theme.breakpoints.md})`
    ),
    isLg: useMediaQuery(
      `(min-width: calc(${theme.breakpoints.md} + 1px)) and (max-width: ${theme.breakpoints.lg})`
    ),
    isXl: useMediaQuery(
      `(min-width: calc(${theme.breakpoints.lg} + 1px)) and (max-width: ${theme.breakpoints.xl})`
    ),
    isAboveXl: useMediaQuery(
      `(min-width: calc(${theme.breakpoints.xl} + 1px))`
    ),
  };
};

export default UseResponsive;
