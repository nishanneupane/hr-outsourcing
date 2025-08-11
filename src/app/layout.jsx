
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/context/modalContext";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ExpertHR",
  description: "ExpertHR",
};

export default function RootLayout({ children }) {
  return (
    <ModalProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn('antialiased font-sans selection:bg-orange-600/35 selection:text-orange-500', geistSans.variable)}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ModalProvider>
  );
}
