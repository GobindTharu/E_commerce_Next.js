import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import NavBar from "../Components/main/NavBar.jsx";
import SubHeader from "app/Components/main/SubHeader.jsx";
import Header from "app/Components/main/Header.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B-MANDU",
  description: "E-commerce Site Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <NavBar />
        <SubHeader />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
