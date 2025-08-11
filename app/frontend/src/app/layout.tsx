import type { Metadata } from "next";
import Providers from "./Providers";
import { Flex } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import '@fontsource/geist-sans';
import "@fontsource/montserrat";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/quicksand";
import "@fontsource/inter-tight"; 
import "@fontsource/inter-tight/800.css";
import "@fontsource/inter-tight/700.css";
import '@fontsource-variable/merriweather';


export const metadata: Metadata = {
  title: "Nux - Dashboard",
  description: "",
  icons: {
    icon: "/src/icon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body>
        <Providers>
          <Flex width="100vw" h="100vh">
            {children} 
          </Flex>
        </Providers>
      </body>
    </html>
  );
}