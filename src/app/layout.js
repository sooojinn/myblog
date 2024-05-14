import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { blogDesc, blogName } from "@/config/const";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: blogName,
  description: blogDesc,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
