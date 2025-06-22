import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { LocationContextProvider } from "@/context/ContextProvider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";

const fontSans = FontSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nimbusy",
  description: "A Modern UI/UX Weather App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <LocationContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="w-full flex justify-center items-center flex-col">
              <div className="container sticky z-50 bg-background top-0">
                <Navbar />
              </div>
              <div className="container">{children}</div>
              {/* Footer */}
              <footer className="w-full text-center py-4 text-muted-foreground text-sm border-t border-border mt-10">
                © {new Date().getFullYear()}{" "}
                <a
                  className="text-blue-500"
                  href="https://github.com/prachit082/Nimbusy.git"
                >
                  Nimbusy
                </a>
                . All rights reserved.
              </footer>
            </main>
          </ThemeProvider>
        </LocationContextProvider>
      </body>
    </html>
  );
}
