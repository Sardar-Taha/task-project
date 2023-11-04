import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { NavbarComp } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Content Management System",
  description: "Test Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
          <div className="w-full flex-none md:w-[235px]">
            <Sidebar />
          </div>
          <div className="flex-grow overflow-auto">
            <NavbarComp />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
