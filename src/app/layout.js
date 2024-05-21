import "@/styles/globals.css";
import Header from "@/components/Header";
import { BLOG_NAME, BLOG_DESC } from "@/config/const";
import Footer from "@/components/Footer";
import { Gothic_A1 } from "next/font/google";
import { getRenderedCategoryList } from "/lib/posts";
import Aside from "@/components/Aside";

export const metadata = {
  title: BLOG_NAME,
  description: BLOG_DESC,
  openGraph: {
    title: BLOG_NAME,
    description: BLOG_DESC,
    siteName: BLOG_NAME,
    type: "website",
  },
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
        <main>
          {children}
          <Aside />
        </main>
        <Footer />
      </body>
    </html>
  );
}
