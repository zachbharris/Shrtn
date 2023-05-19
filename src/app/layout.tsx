import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shrtn URLs",
  description: "Quickly generate short URLs for sharing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 h-full w-full selection:bg-blue-800"
    >
      <body
        className={`${inter.className} h-full w-full flex items-start md:items-center justify-center overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
