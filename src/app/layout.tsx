import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <Head>
        <title>Shrtn</title>
        <meta name="description" content="Simple Short URL Generator." />
        <meta property="og:image" content="/public/og-image.png" />
        <meta property="og:title" content="/public/og-image.png" />
        <meta property="og:description" content="/public/og-image.png" />
      </Head>
      <body
        className={`${inter.className} h-full w-full flex items-start md:items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
