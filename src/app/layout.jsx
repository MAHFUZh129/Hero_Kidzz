import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ['100', '200', '400', '500', '600', '800']
})

export const metadata = {
  metadataBase: new URL("https://hero-kidz-4ds4e5omf-mahfuzs-projects-c3a3afbe.vercel.app/"),

  title: {
    default: "Hero Kidz",
    template: "%s | Hero Kidz",
  },

  description:
    "Hero Kidz is an online kids toy store offering safe, fun, and educational toys for children of all ages.",

  keywords: [
    "kids toys",
    "children toys",
    "educational toys",
    "baby toys",
    "learning toys",
    "Hero Kidz",
    "online toy store",
    "kids toy shop",
  ],

  applicationName: "Hero Kidz",
  authors: [{ name: "Hero Kidz Team" }],
  creator: "Hero Kidz",
  publisher: "Hero Kidz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    title: "Hero Kidz",
    description:
      "Safe, fun, and educational toys for kids. Shop the best kids toys online.",
    siteName: "Hero Kidz",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/sp3tWCzH/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz",
    description:
      "Safe, fun, and educational toys for kids. Shop the best kids toys online.",
    images: ["https://i.ibb.co.com/sp3tWCzH/image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body
          className={`${poppins.className} antialiased`}
        >
          <NextAuthProvider>
            <header className="w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="bg-zinc-50 px-8 py-11"> {children}</main>
          <Footer></Footer>
          </NextAuthProvider>
          
        </body>
      </html>
    

  );
}
