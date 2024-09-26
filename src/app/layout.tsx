import Header from "@/components/header/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lee's Coffee",
  description: "Lee's Coffee Web Site",
  icons: {
    icon: "/favicon.ico", // 경로 설정
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <Header />
        <div>Hello</div>
        <main>{children}</main> {/* Render children here */}
      </body>
    </html>
  );
}
