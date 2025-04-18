import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import GuestGuard from "../../guard/GuestGuard";
import ReactQueryClientProvider from "../../provider/ReactQueryClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UI",
  description: "This is a home page.",
};

export default function GuestLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center min-h-screen`}
    >
      <Toaster />
      <GuestGuard>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </GuestGuard>
    </div>
  );
}
