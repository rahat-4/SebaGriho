import { useMediaQuery } from "@mantine/hooks";

// Define breakpoints for reuse
const breakpoints = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px) and (max-width: 767px)",
  md: "(min-width: 768px) and (max-width: 991px)",
  lg: "(min-width: 992px) and (max-width: 1199px)",
  xl: "(min-width: 1200px) and (max-width: 1407px)",
  aboveXl: "(min-width: 1408px)",
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
