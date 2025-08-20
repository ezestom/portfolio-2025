import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import BlurFade from "@/components/magicui/blur-fade";
import { CoolMode } from "@/components/magicui/cool-mode";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,

  icons: {
    icon: "/e_logo_op.png",
  },

  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-12 pb-24 px-6 relative",
          fontSans.variable
        )}

      >

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <BlurFade className="fixed top-5 left-5 z-50">
              <CoolMode options={{
                particle:
                  "/e_logo_op.png",
                speedUp: 10,
                size: 40,
                speedHorz: 0
              }} >
                <Link href="/" aria-label={DATA.name}>
                  <Button className="bg-transparent border-none p-0 active:bg-inherit hover:bg-inherit focus:bg-inherit hover:scale-105 transition-all active:scale-95 shadow-none">
                    <Image
                      src="/e_logo_op.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      priority
                    />
                  </Button>
                </Link>
              </CoolMode>
            </BlurFade>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
