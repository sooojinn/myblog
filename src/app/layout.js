import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soojin",
  description: "박수진 개발 블로그",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
