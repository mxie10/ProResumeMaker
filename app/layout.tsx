'use client'
import Register from "./authentication/register";
import { Inter as FontSans } from "next/font/google";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer";
import { ContextProvider } from "./context/useContext";
import OptimizeExpModel from "./models/OptimizeExpModel";
import ReviewWorkExpOptResModel from "./models/ReviewWorkExpOptResModel";
import OptmizeProSummaryModel from "./models/OptmizeProSummaryModel";
import "./globals.css";

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
      <ContextProvider>
        <div className="bg-neutral-50 min-h-screen flex flex-col relative">
          <Navbar />
          <div className="mt-16">
            {children}
          </div>
          {/* <Footer/> */}
          <OptimizeExpModel/>
          <ReviewWorkExpOptResModel/>
          <OptmizeProSummaryModel/>
        </div>
      </ContextProvider>
    )
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col relative">
        {user ? <LayoutBody /> : <Register />}
      </body>
    </html>
  )
}
