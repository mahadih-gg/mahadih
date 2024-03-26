import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.scss";
import "@/styles/styles.scss";
import Navbar from "@/components/globals/Navbar";

const inter = Poppins({
  weight: ['300', '400', '500', '600', '700', '800',],
  subsets: ["latin"]
});

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
        <header className="relative">
          <Navbar />
        </header>
        {children}

        <h1 className="hero-name py-96"> Under Construction</h1>
        <h1 className="hero-name py-96"> Under Construction</h1>
        <h1 className="hero-name py-96"> Under Construction</h1>

      </body>
    </html>
  );
}
