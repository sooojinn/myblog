import "@/styles/globals.css";
import Header from "@/components/Header";
import { BLOG_NAME, BLOG_DESC } from "@/config/const";
import Footer from "@/components/Footer";
import { Gothic_A1 } from "next/font/google";

export const metadata = {
  title: BLOG_NAME,
  description: BLOG_DESC,
};

const gothic = Gothic_A1({
  weight: ["400", "700"],
  subsets: [],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={gothic.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
