import { cn } from "@/lib/utils";
import "./globals.css";
import Register from "./authentication/register";
import { Inter as FontSans } from "next/font/google";
import Navbar from "./component/navbar/Navbar";

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
      <div className="min-h-screen bg-neutral-50">
        <Navbar/>
        {children}
      </div>
    )
  }

  return (
    <html lang="en">
      <body
        className="min-h-screen w-full"
      >
        {user ? <LayoutBody /> : <Register />}
      </body>
    </html>
  )
}
