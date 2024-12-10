import { useMediaQuery } from "@mantine/hooks";

// Define breakpoints for reuse
const breakpoints = {
  xs: "(max-width: 576px)",
  sm: "(min-width: 577px) and (max-width: 768px)",
  md: "(min-width: 769px) and (max-width: 992px)",
  lg: "(min-width: 993px) and (max-width: 1200px)",
  xl: "(min-width: 1201px) and (max-width: 1408px)",
  aboveXl: "(min-width: 1409px)",
};

const useResponsive = () => {
  return {
    // Breakpoints based on screen sizes
    isXs: useMediaQuery(breakpoints.xs), // Extra small screens
    isSm: useMediaQuery(breakpoints.sm), // Small screens
    isMd: useMediaQuery(breakpoints.md), // Medium screens
    isLg: useMediaQuery(breakpoints.lg), // Large screens
    isXl: useMediaQuery(breakpoints.xl), // Extra large screens
    isAboveXl: useMediaQuery(breakpoints.aboveXl), // Screens larger than XL
  };
};

export default useResponsive;
