import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Donnukrit Satirakul — Senior Mobile Developer (Flutter)",
  description:
    "Resume of Donnukrit Satirakul — Senior Mobile Developer specialised in Flutter, with full-stack experience across Go, Nest.js and modern front-end frameworks.",
  authors: [{ name: "Donnukrit Satirakul", url: "https://github.com/xSengPed" }],
  openGraph: {
    title: "Donnukrit Satirakul — Senior Mobile Developer (Flutter)",
    description:
      "Flutter-first mobile engineer building robust, scalable applications at SCB TechX.",
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
