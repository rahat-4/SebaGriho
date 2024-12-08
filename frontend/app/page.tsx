import { SimpleGrid, Divider } from "@mantine/core";

import DoctorList from "./components/doctor/DoctorList";

export default function Home() {
  return (
    <main>
      <SimpleGrid
        cols={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
        spacing={0}
        style={{
          justifyContent: "center",
          gap: 10,
          margin: "0 auto",
          maxWidth: "fit-content",
        }}
      >
        <DoctorList />
      </SimpleGrid>
    </main>
  );
}
