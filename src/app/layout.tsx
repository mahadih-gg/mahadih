import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import "@/styles/styles.scss";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahadi Hasan.",
  description: "Experienced front-end developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TracingBeam> */}
        {children}
        {/* </TracingBeam> */}
      </body>
    </html>
  );
}
