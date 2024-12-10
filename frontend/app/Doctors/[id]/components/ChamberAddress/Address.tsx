import { Box, Image } from "@mantine/core";

import MapComponent from "./MapComponent";

import SampleAddress from "@/public/address.jpg";

const Address = () => {
  return (
    <>
      <Image src={SampleAddress.src} alt="test" h={180} fit="cover" />
      <Box>
        <MapComponent apiKey={"AIzaSyD-CWmVyAapUI5zhqL8zIj8Oa6a95UexVs"} />
      </Box>
    </>
  );
};

export default Address;
