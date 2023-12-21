import { cn } from "@/lib/utils";
import "./globals.css";
import Register from "./authentication/register";
import { Inter as FontSans } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {

  const user = "test";

  const LayoutBody = () => {
    return (
      <div className="bg-neutral-50 min-h-screen flex flex-col relative">
        <Navbar />
        {children}
        {/* <Footer/> */}
      </div>
    )
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {user ? <LayoutBody /> : <Register />}
      </body>
    </html>
  )
}
