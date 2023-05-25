import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrtn",
  description: "Simple Short URL Generator.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrtn-zbh.vercel.app/",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 h-full w-full selection:bg-blue-500 selection:dark:bg-blue-800"
    >
      <body
        className={`${inter.className} h-full w-full flex flex-col items-start md:items-center justify-center`}
      >
        {children}

        <Footer />
      </body>
    </html>
  );
}
