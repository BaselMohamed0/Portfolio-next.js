import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Basel Mohamed | Frontend Engineer",
  description: "Modern high-performance web experiences built with Next.js",
  other: {
    author: "Basel Mohamed",
    copyright: "© 2026 Basel Mohamed. All Rights Reserved",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased scroll-smooth">
        {/* google analytics */}  
        <GoogleAnalytics gaId="G-EL25SCDC7C" />
       
        {children}


        {/* Vercel analytics */}
        <Analytics/>
      </body>
    </html>
  );
}
