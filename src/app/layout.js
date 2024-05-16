import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { BLOG_NAME, BLOG_DESC } from "@/config/const";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: BLOG_NAME,
  description: BLOG_DESC,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
