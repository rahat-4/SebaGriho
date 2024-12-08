import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "./components/Header/Header";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
