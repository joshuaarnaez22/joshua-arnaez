import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshua-arnaez.vercel.app/"),

  title: {
    template: "%s | Portfolio made by Josh",
    default: "Portfolio",
  },
  authors: {
    name: "Joshua",
  },

  description: "Portfolio made using Nextjs tailwind and aceternity-ui",
  openGraph: {
    title: "Portfolio",
    description: "Portfolio made using Nextjs tailwind and aceternity-ui",
    url: "https://joshua-arnaez.vercel.app/",
    siteName: "Portfolio",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "portfolio",
    "nextjs",
    "tailwindcss",
    "aceternity",
    "fast",
    "static",
    "next14",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
