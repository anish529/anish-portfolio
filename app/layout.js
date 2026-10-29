import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#0d1224",
};

export const metadata = {
  title: "Anish Kumar Prajapati | Java Backend Developer",
  description:
    "Portfolio of Anish Kumar Prajapati — Aspiring Java Backend Developer skilled in Core Java, Spring Boot, REST APIs, MySQL, Multithreading, and JDBC. Currently building real-time collaborative backend systems.",
  keywords: [
    "Anish Kumar Prajapati",
    "Java Backend Developer",
    "Spring Boot",
    "REST API",
    "MySQL",
    "Core Java",
    "Multithreading",
    "JDBC",
    "Backend Developer India",
    "Java Portfolio"
  ],
  authors: [{ name: "Anish Kumar Prajapati" }],
  openGraph: {
    title: "Anish Kumar Prajapati | Java Backend Developer",
    description:
      "Portfolio of Anish Kumar Prajapati — Aspiring Java Backend Developer building practical Java applications with Spring Boot, REST APIs, and MySQL.",
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar Prajapati | Java Backend Developer",
    description:
      "Aspiring Java Backend Developer — Spring Boot, REST APIs, MySQL, Multithreading. Currently building a Real-Time Collaborative Sync Engine.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
