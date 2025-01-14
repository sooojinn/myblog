import "./globals.css";
import Header from "@/components/layouts/Header";
import { BLOG_NAME, BLOG_DESC, BLOG_URL, BLOG_KEYWORDS } from "@/config/const";
import Footer from "@/components/layouts/Footer";
import { Gothic_A1 } from "next/font/google";
import { ThemeProvider } from "@/components/layouts/theme/ThemeProvider";
import { StaticDataProvider } from "@/components/context/StaticDataProvider";
import { getAllTags, getCategoryLabelList } from "@/lib/posts";

export const metadata = {
  title: BLOG_NAME,
  description: BLOG_DESC,
  keywords: BLOG_KEYWORDS,
  openGraph: {
    title: BLOG_NAME,
    description: BLOG_DESC,
    siteName: BLOG_NAME,
    url: BLOG_URL,
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const gothic = Gothic_A1({
  weight: ["400", "700"],
  subsets: [],
});

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const categoryLabelList = await getCategoryLabelList();
  const allTags = await getAllTags();

  return (
    <html lang="ko">
      <body className={gothic.className}>
        <ThemeProvider>
          <div className="min-w-[320px] max-w-[950px] min-h-screen mx-auto flex flex-col">
            <StaticDataProvider data={{ categoryLabelList, allTags }}>
              <Header />
              <main className="px-[5vw] flex flex-col flex-grow h-full">
                {children}
              </main>
              <Footer />
            </StaticDataProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
